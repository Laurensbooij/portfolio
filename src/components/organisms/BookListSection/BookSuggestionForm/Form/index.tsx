import React from 'react'

import { InputLabel } from 'components/atoms/TextElements'
import SubmitButton from 'components/atoms/Buttons/SubmitButton'

import { Container, FormFieldsContainer, InputContainer, Input } from './styled'

const Form = ({  }) => (
  <Container>
    <FormFieldsContainer>
      <InputContainer>
        <InputLabel htmlFor="book-title" required>Book title / author</InputLabel>
        <Input 
          type="text" 
          id="book-title"
          placeholder="Book title / author"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="sender-name">Your name</InputLabel>
        <Input
          type="text"
          id="sender-name"
          placeholder="Your name"
        />
      </InputContainer>
    </FormFieldsContainer>
    <SubmitButton buttonText='Submit suggestion'/>
  </Container>
)

export default Form