import React, { FC, useState } from 'react'

import { bookListDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import { UnorderedList } from 'components/atoms/TextElements'

import { 
  StyledCardContainer, 
  GridContainer, 
  CoverImage,
  TitleContainer,
  Title, 
  Authors,
  Summary,
  Divider,
  ExpandButton 
} from './styled'

interface bookListItemsProps {
  data: bookListDataProps
}

const BookListItem: FC<bookListItemsProps> = ({ data }) => {

  const {
    coverImage,
    title,
    authors,
    summary,
  } = data
  const keyTakeaways = data.keyTakeaways || []
  const coverImageUrl = coverImage.fields.file.url

  const keyTakeawayListItems = keyTakeaways.map((listItem, index) => (
    <li key={`${index}-${listItem}`}>{listItem}</li>
  ))

  const [expanded, setExpanded] = useState(false)
  
  const expandButtonClickHandler = () => {
    setExpanded(prevState => !prevState)
  }

  return (
    <StyledCardContainer expanded={expanded}>
      <GridContainer>
        <CoverImage src={coverImageUrl} alt={`Book cover for ${title}`} />
        <TitleContainer>
          <Title>{title}</Title>
          <Authors>{authors}</Authors>
        </TitleContainer>
        <Summary>{summary}</Summary>
      </GridContainer>
      <Divider />
      <UnorderedList>
        {keyTakeawayListItems}
      </UnorderedList>
      <ExpandButton 
        onClick={expandButtonClickHandler} 
        expanded={expanded}
      >
        {expanded ? `See less` : 'See more'}
      </ExpandButton>
    </StyledCardContainer>
  )
}

export default BookListItem