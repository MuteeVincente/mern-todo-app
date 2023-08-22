import React ,{useState} from 'react';
import {Container} from './styles';
import Form from  '../Form';
function Todo() {
  const [input, setInput] = useState('');
  console.log(input, 'input')

  return (
    <Container>
      <h2>List of Todos </h2>
      {/*form component*/}
      <Form input={input} setInput = {setInput} />
      {/*Todo List*/}
      {/*Key*/}
      {/*Author*/}



      </Container>
  )
}

export default Todo