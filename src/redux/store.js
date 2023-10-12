import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { contactsReducer } from "./contactsSlice";
//import { persistStore, persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage";
//import rootReducer from "./reducers"


/*
const persistConfigFilter = {
    key: "filter",
    storage,    
};

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
);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: persistedFilterReducer,
    },
});

export const persistor = persistStore(store);*/


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
});