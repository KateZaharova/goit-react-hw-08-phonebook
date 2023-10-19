import { ButtonDlt, Wrapper } from "./ContactItem.styled";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";

export const ContactItem = ({ item: { name, phone }, itemId }) => {
    const dispatch = useDispatch();
    const deleteHandContact = () => dispatch(deleteContact(itemId));
    return (
        <Wrapper>
            <>{name}: {phone}</>
            <ButtonDlt type="button" onClick={deleteHandContact}>Delete</ButtonDlt>
        </Wrapper>
    );
};
