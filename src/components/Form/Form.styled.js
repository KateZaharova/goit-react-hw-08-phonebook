import { Form, Field,ErrorMessage} from 'formik';
import styled from "styled-components";



export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
padding:20px;
gap: 8px;
border: 4px solid black;
border-radius: 8px;
width: 600px;
`;

export const FieldInfo = styled(Field)`
border: 4px solid #08c;
font-size: 24px;
border-radius: 8px;
`;


export const ButtonAdd = styled.button`
align-self: flex-start;
font-size: 24px;
border-radius: 8px;
color: white;
background-color: #08c;
margin-top:40px;
cursor: pointer;
:focus{
    background-color:green;
}
`;


export const ErrorMsg = styled(ErrorMessage)`
color: red;
font-size: 20px;
`
