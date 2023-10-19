import { ContactItem } from "../ContactItem/ContactItem";
import { LiItem } from "./ContactList.styled";
import { selectContacts, selectFilter } from "redux/contacts/selectors";
import { useSelector } from "react-redux";



export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter).value;

    const filteredContacts = contacts.filter(item => {  
      return item.name
        .toLowerCase()
        .includes(filter.toLowerCase());
    });

    return (
        <div>
            <ul>
                {filteredContacts.map(item => (
                    <LiItem key={item.id}>
                        <ContactItem item={{ name: item.name, phone: item.phone }} itemId={item.id} />
                    </LiItem>
                ))}
            </ul>
        </div>
    )
}