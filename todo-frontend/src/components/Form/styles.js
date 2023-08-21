import styled from 'styled-components';


export const FormContainer = styled.form `
display:flex;
justify-content:center;
align-items:center;
@media (max-width:420px){
    flex-direction: column;
}

`;

export const Input = styled.input`
background-color:#f7f7f7;
width:100%;
padding: 8px;
border: 1px solid #ef7368;
border-radius: 8px;
:focus{
    border: 3px #ef7368;
    outline: none;
}

`


export const Button = styled.button`
background-color: #ef7368;
border-radius: 18px;
boarder:2px solid #ef7368;
color :white;
margin-left: 1em;
padding: 8px 20px;
cursor:pointer;
font-weight:600;
font-size: 0.8rem;
@media (max-width:420px){
    margin-top:10px;
    margin-left:0;
    width:100%;
}
`