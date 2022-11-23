import React, { FC, useRef, useState } from 'react'

import { bookListDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import { UnorderedList } from 'components/atoms/TextElements'

import {
  Authors, 
  ContentContainer, 
  CoverImage, 
  Divider,
  ExpandButton, 
  MetaDataContainer, 
  StyledCardContainer, 
  Summary, 
  Title, 
  TitleContainer
} from './styled'

interface bookListItemsProps {
  data: bookListDataProps
}

const BookListItem: FC<bookListItemsProps> = ({ data }) => {
  const {
    authors,
    coverImage,
    summary,
    title,
  } = data
  const keyTakeaways = data.keyTakeaways || []
  const coverImageUrl = coverImage.fields.file.url

  const contentContainerRef = useRef<HTMLDivElement>(null)
  const contentContainerHeight = contentContainerRef.current?.clientHeight || 600

  const keyTakeawayListItems = keyTakeaways.map((listItem, index) => (
    <li key={`${index}-${listItem}`}>{listItem}</li>
  ))

  const [expanded, setExpanded] = useState(false)
  
  const expandButtonClickHandler = () => {
    setExpanded(prevState => !prevState)
  }

  return (
    <StyledCardContainer  
      contentContainerHeight={contentContainerHeight}
      expanded={expanded}
    >
      <ContentContainer ref={contentContainerRef}>
        <MetaDataContainer>
          <CoverImage src={coverImageUrl} alt={`Book cover for ${title}`} />
          <TitleContainer>
            <Title>{title}</Title>
            <Authors>{authors}</Authors>
          </TitleContainer>
          <Summary>{summary}</Summary>
        </MetaDataContainer>
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
      </ContentContainer>
    </StyledCardContainer>
  )
}

export default BookListItem