import { Formik } from 'formik';
import { StyledForm, FieldInfo, ButtonAdd, ErrorMsg } from "./Form.styled";
import * as Yup from 'yup';
//import { addContact } from 'redux/contactsSlice';
import { useDispatch } from "react-redux";
import { getContacts} from "redux/selectors";
import { useSelector } from "react-redux";
import { addContact } from "redux/operations";


const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, 'Too Short!')
        .required('Required'),
    phone: Yup.number()
        .min(3, 'At least 3')
        .positive('Must be positive!')
        .required("Required"),
});

export const ContactForm = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
       
    const addHandContact = (values) => {
        if (-1 !== contacts.findIndex(item => item.name === values.name)) {
            alert(`${values.name} is already in contacts.`);
            return;
        }
        dispatch(addContact(values))
    };
    return (
        <div>
            
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                }}
                validationSchema={ContactFormSchema}
                onSubmit={(values, actions) => {
                    addHandContact(values);
                    actions.resetForm();
                }}
            >
                <StyledForm>
                    <label>
                        Name
                    </label>
                    <FieldInfo type="text" name="name" placeholder="Name ..." /> 
                    <ErrorMsg name="name" component="div" />
                    <label>
                        Number
                    </label>
                    <FieldInfo type="number" name="phone" placeholder="Number ..." /> 
                    <ErrorMsg name="phone" component="div" />
                    <ButtonAdd type="submit">Add contact</ButtonAdd>
                </StyledForm>
            </Formik>
        </div>
    );
};

/*export const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(event.target.elements.text.value));
    form.reset();
  };
  // Остальное код компонента
};*/

  

