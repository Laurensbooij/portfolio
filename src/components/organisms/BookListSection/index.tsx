import React, { ChangeEvent, FC, useEffect, useState } from 'react'

import { usePositioningDimensionsContext } from 'contexts/PositioningDimensionsContext'

import { Entry } from 'contentful'
import { bookListDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import BookList from './BookList'
import BookSuggestionForm from './BookSuggestionForm'

import { Container, EmptySearchNotification, StyledSearchBox } from './styled'

interface bookListSectionProps {
  bookListData: Entry<bookListDataProps>[],
}

const BookListSection: FC<bookListSectionProps> = ({ bookListData }) => {

  const { positioningDimensions } = usePositioningDimensionsContext()

  const [sortedBookListData, setSortedBookListData] = useState(bookListData)

  useEffect(() => {
    const sortedBookListData = bookListData.sort((a, b) => a.fields.title.localeCompare(b.fields.title));
    setSortedBookListData(sortedBookListData)
  }, [bookListData])

  const [filteredBookListData, setFilteredBookListData] = useState(sortedBookListData)
  const [searchInput, setSearchInput] = useState('')

  const searchOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const searchInput = event.target.value
    setSearchInput(searchInput)
    
    if (searchInput.length > 2) {
      const filteredBookList = sortedBookListData.filter(book => {
        if(book.fields.title.toLowerCase().includes(searchInput.toLowerCase())) {
          return true
         }
        if (book.fields.authors.toLowerCase().includes(searchInput.toLowerCase())) {
          return true
        }
      })
      setFilteredBookListData(filteredBookList)
    }
    else setFilteredBookListData(sortedBookListData)
  }

  const clearSearchInput = () => {
    setSearchInput('')
    setFilteredBookListData(sortedBookListData)
  }

  const EmptySearchMessage = "It looks like I didn't read the book you're looking for yet. If you think I should you can submit it as a suggesiton down below!"

  return (
    <Container>
      <StyledSearchBox 
        onChangeHandler={searchOnChangeHandler} 
        clearInputHandler={clearSearchInput} 
        value={searchInput} 
        placeholder="Find a book or author"
        clientWidth={positioningDimensions.clientWidth}
        offsetTop={positioningDimensions.headerHeight}
      />
      {filteredBookListData.length > 0 ?
      <BookList bookListData={filteredBookListData}/> :
      <EmptySearchNotification>{EmptySearchMessage}</EmptySearchNotification>}
      <BookSuggestionForm />
    </Container>
  )
}

export default BookListSection