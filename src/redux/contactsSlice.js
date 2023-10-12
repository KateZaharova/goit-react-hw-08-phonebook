import { createSlice, /*nanoid*/ } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

/*const contactsInitialState = {
    list: [
        { id: 'id-1', contact: { name: 'Rosie Simpson', phone: '459-12-56' } },
        { id: 'id-2', contact: { name: 'Hermione Kline', phone: '443-89-12' } },
        { id: 'id-3', contact: { name: 'Eden Clements', phone: '645-17-79' } },
        { id: 'id-4', contact: { name: 'Annie Copeland', phone: '227-91-26' } },
    ]
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.list.push(action.payload);
            },
            prepare(contact) {
                return {
                    payload: {
                        contact,
                        id: nanoid(),
                    },
                };
            },
        },
            deleteContact(state, action) {
                const index = state.list.findIndex(contacts => contacts.id === action.payload);
                state.list.splice(index, 1);
            },
        
    },
});*/

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContact.pending]: handlePending,
        [deleteContact.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [addContact.fulfilled](state, action){
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
         },
        [deleteContact.fulfilled](state, action){
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id);
            state.items.splice(index, 1);
        },
   /* reducers: {
        fetchingInProgress(state) {
            state.isLoading = true;
        },
        fetchingSuccess(state, action) {
            state.isLoading = false,
            state.error = null,
            state.items = action.payload;
         },
        fetchingError(state, action) {
            state.isLoading = false,
            state.error = action.payload;
        },
    },*/
    },
});

export const contactsReducer = contactsSlice.reducer;

//export const {fetchingInProgress,fetchingSuccess, fetchingError} = contactsSlice.actions;
//export const { addContact, deleteContact} = contactsSlice.actions;
//export const contactsReducer = contactsSlice.reducer;
