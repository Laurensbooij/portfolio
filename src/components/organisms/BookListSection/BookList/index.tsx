
import React, { FC } from 'react'

import { Entry } from 'contentful'
import { bookListDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import GridContainer from 'components/atoms/GridContainer'
import BookListItem from './BookListItem'

interface bookListProps {
  bookListData: Entry<bookListDataProps>[],
}

const BookList: FC<bookListProps> = ({ bookListData }) => {
  
  const bookListItems = bookListData.map((book: Entry<bookListDataProps>) => (
    <BookListItem 
      key={book.sys.id}
      data={book.fields}
    />
  ))

  return (
    <GridContainer>
      {bookListItems}
    </GridContainer>
  )
}

export default BookList