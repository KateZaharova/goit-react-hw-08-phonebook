import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "redux/auth/operations";
import { fetchContacts, addContact, deleteContact } from "./operations";


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
            state.items = action.payload.map(({ number: phone, ...rest }) => ({ phone, ...rest }));
        },
        [addContact.fulfilled](state, action){
            state.isLoading = false;
            state.error = null;
            /*
            const contactItem = action.payload;
            contactItem.phone = contactItem.number;
            delete contactItem.number;            
            state.items.push(contactItem);
            */
            const { number: phone, ...rest } = action.payload; 
            state.items.push({ phone, ...rest});
         },
        [deleteContact.fulfilled](state, action){
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id);
            state.items.splice(index, 1);
        },
        [logOut.fulfilled](state) {
            state.items = [];
            state.error = null;
            state.isLoading = false;
        },
    },
});

export const contactsReducer = contactsSlice.reducer;


