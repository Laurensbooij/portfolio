import React, { ChangeEvent, FC, useEffect, useState } from 'react'

import { usePositioningDimensionsContext } from 'contexts/PositioningDimensionsContext'

import { Entry } from 'contentful'
import { bookListDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import GridContainer from 'components/atoms/GridContainer'
import BookListItem from './BookListItem'

import { Container, StyledSearchBox } from './styled'

interface bookListSectionProps {
  bookListData: Entry<bookListDataProps>[],
}

const BookListSection: FC<bookListSectionProps> = ({ bookListData }) => {

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

  const { positioningDimensions } = usePositioningDimensionsContext()

  const bookListItems = filteredBookListData.map((book: Entry<bookListDataProps>) => (
    <BookListItem 
      key={book.sys.id}
      data={book.fields}
    />
  ))

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
      <GridContainer>
        {bookListItems}
      </GridContainer>
    </Container>
  )
}

export default BookListSection