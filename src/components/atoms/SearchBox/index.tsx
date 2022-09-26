import React, { ChangeEvent, FC, useRef } from 'react'

import ClearButton from './ClearButton'

import { Container, Input, SearchButton } from './styled'

interface searchBoxProps {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
  clearInputHandler: () => void,
  value: string,
  placeholder?: string,
  className?: string,
}

const SearchBox: FC<searchBoxProps> = ({ onChangeHandler, clearInputHandler, value, placeholder, className }) => {

  const inputRef = useRef<HTMLInputElement>(null)

  const searchButtonClickHandler = () => {
    if (inputRef.current != null) {
      inputRef.current.focus()
    }
  }

  return (
    <Container className={className}>
      <Input 
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChangeHandler(event)}
      />
      {value.length > 0 ? <ClearButton onClick={clearInputHandler} /> : <SearchButton onClick={searchButtonClickHandler}/>}
    </Container>
  )
}

export default SearchBox