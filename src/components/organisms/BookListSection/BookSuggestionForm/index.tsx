import React, { FC } from 'react'

import Icon from './Icon'
import Form from './Form'

import { StyledCardContainer, TextContainer, Title, Subtitle } from './styled'

interface bookSuggestionFormProps {

}

const BookSuggestionForm: FC<bookSuggestionFormProps> = ({  }) => {

  return (
    <StyledCardContainer>
      <Icon/>
      <TextContainer>
        <Title>Do you have a book suggestion?</Title>
        <Subtitle>Leave it below and leave your name if you want 🙏🏼</Subtitle>
      </TextContainer>
      <Form/>
    </StyledCardContainer>
  )
}

export default BookSuggestionForm