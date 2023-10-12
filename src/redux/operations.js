import axios from "axios";
//import { fetchingInProgress, fetchingSuccess, fetchingError } from "./contactsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
//import { nanoid } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6524526bea560a22a4e9bda9.mockapi.io/api/contacts";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            //  dispatch(fetchingInProgress());
            const response = await axios.get("/contacts");
            return response.data;
            // dispatch(fetchingSuccess(response.data));
        } catch (e) {
            //  dispatch(fetchingError(e.message));
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContacts",
    async (values, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", { name: values.name, phone:values.phone});
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);