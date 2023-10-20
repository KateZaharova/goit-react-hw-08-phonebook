import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { ContactList } from "components/ContactList/ContactList";
import { ContactForm } from "../components/Form/Form";
import { Filter } from "components/Filter/Filter";
//import {ContactEditor} from
import { fetchContacts } from "redux/contacts/operations";
import { selectLoading } from "redux/contacts/selectors";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Your contacts</title>
            </Helmet>
            <div>{isLoading && "Request in progress..."}</div>
            <ContactForm />
            <Filter/>
            <ContactList />
            
        </>
    );
};