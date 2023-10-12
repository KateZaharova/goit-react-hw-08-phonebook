import { Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyle";
//import { Component } from "react";
import { ContactForm } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
//import { nanoid } from 'nanoid';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";


/*
const getIntialFilters = () => {
  const savedFilters = localStorage.getItem("contact-filter");
  if (savedFilters !== null) {
    return JSON.parse(savedFilters);
  }
  return '';
};


const getIntialContacts = () => {
  const savedContacts = localStorage.getItem("contactBook");
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [
      { id: 'id-1', contact: { name: 'Rosie Simpson', phone: '459-12-56' } },
      { id: 'id-2', contact: { name: 'Hermione Kline', phone: '443-89-12' } },
      { id: 'id-3', contact: { name: 'Eden Clements', phone: '645-17-79' } },
      { id: 'id-4', contact: { name: 'Annie Copeland', phone: '227-91-26' } },
  ];
};

*/
export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  //const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  //const [contacts, setContacts] = useState(getIntialContacts());
  //const [filter, setFilter] = useState(getIntialFilters());


  /*useEffect(() => {
    localStorage.setItem("contact-filter", JSON.stringify(filter))
  }, [filter]);


    useEffect(() => {
    localStorage.setItem("contactBook", JSON.stringify(contacts))
  }, [contacts]);


const addContact = contact => {
    if (-1 !== contacts.findIndex(option => option.contact.name === contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    setContacts(prevItems => [...prevItems, { id: nanoid(), contact: contact }])
  };
*/

/*const deleteContact = contactId => {
    setContacts(prevItems => prevItems.filter(item => item.id !== contactId)
    );
  };*/

/*
const findName = filterName => {
    setFilter(filterName); 
  };


  const resetFilter = () => {
    setFilter('')
  };
*/


return (
    <Layout
      /*style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
    }}*/>
    <h1>Phonebook</h1>
    <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
    <h2>Contacts</h2>
    <Filter />
    <ContactList/>
    <GlobalStyle/>
    </Layout>
  );

  };
