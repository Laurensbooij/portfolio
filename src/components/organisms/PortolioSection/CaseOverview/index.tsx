import React, { FC } from 'react'

import { usePositioningDimensionsContext } from 'contexts/PositioningDimensionsContext'

import { Entry } from 'contentful'
import { portfolioCaseDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import Link from 'next/link'

import CloseButton from './CloseButton'
import CaseCategories from '../CaseCategories'

import { BackgroundOverlay, ContentContainer, ScrollContainer, MetaDataContainer, Title, Subtitle, Divider } from './styled'
import RichText from 'components/atoms/RichText'

interface caseOverviewProps {
  caseData: portfolioCaseDataProps,
}

const CaseOverview: FC<caseOverviewProps> = ({ caseData }) => {

  const { positioningDimensions } = usePositioningDimensionsContext()

  const {
    title,
    subtitle,
    caseCategories,
    caseContent,
  } = caseData

  return (
    <>
      <Link href="/portfolio">
        <BackgroundOverlay />
      </Link>
      <ContentContainer headerHeight={positioningDimensions.headerHeight}>
        <ScrollContainer>
          <CloseButton/>
          <MetaDataContainer>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <CaseCategories caseCategories={caseCategories} isOverviewPage />
          </MetaDataContainer>
          <Divider />
          <RichText content={caseContent.content} />
        </ScrollContainer>
      </ContentContainer>
    </>
  )
}

export default CaseOverview