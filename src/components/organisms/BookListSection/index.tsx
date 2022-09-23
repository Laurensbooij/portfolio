import React, { FC } from 'react'

import { Entry } from 'contentful'
import { bookListDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import BookListItem from './BookListItem'

import { Container } from './styled'
import GridContainer from 'components/atoms/GridContainer'

interface bookListSectionProps {
  bookListData: Entry<bookListDataProps>[],
}

const BookListSection: FC<bookListSectionProps> = ({ bookListData }) => {

  const randomizedBookListData = bookListData.sort((a, b) => 0.5 - Math.random());
  const bookListItems = randomizedBookListData.map((book) => (
    <BookListItem 
      key={book.sys.id}
      data={book.fields}
    />
  ))



  return (
    <Container>
      <GridContainer>
        {bookListItems}
      </GridContainer>
    </Container>
  )
}

export default BookListSection