import { ContactItem } from "../ContactItem/ContactItem";
import { LiItem } from "./ContactList.styled";
import { getContacts, getFilter } from "redux/selectors";
import { useSelector } from "react-redux";



export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter).value;

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