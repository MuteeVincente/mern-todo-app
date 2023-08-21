import React from 'react'
import { FormContainer,Input,Button } from './styles';

export default function Form() {
  return (
    <FormContainer>
        <Input
        
        value=''
        type ='text'
        role ='input'
        />
        <Button type='submit'>Add</Button></FormContainer>
  )
}
