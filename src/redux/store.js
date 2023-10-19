import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { contactsReducer } from "./contacts/slice";
import { persistStore, persistReducer, REHYDRATE, PAUSE, FLUSH, PERSIST, PURGE, REGISTER} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
//import rootReducer from "./reducers"


const authPersistConfig = {
    key: "auth",
    storage,
    whitelist:["token"],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools:process.env.NODE_ENV==="development",
});

export const persistor = persistStore(store);


/*export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
});

const persistConfigContacts = {
    key: "contacts",
    storage,
};

const persistedContactsReducer = persistReducer(
    persistConfigContacts,
    contactsReducer
);

const persistedFilterReducer = persistReducer(
    persistConfigFilter,
    filterReducer
);*/
