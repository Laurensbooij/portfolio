import React, { FC, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { portfolioCaseDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import Link from 'next/link'

import CaseCategories from '../CaseCategories'
import ReadMoreLink from './ReadMoreLink'

import { 
  Container, 
  CoverImage, 
  MetadataContainer, 
  MainContentContainer, 
  Title, 
  Subtitle,
  CaseSummary,
} from './styled'

interface portfolioCasePreviewProps {
  data: portfolioCaseDataProps,
  fullWidth: boolean,
}

const PortfolioCasePreview: FC<portfolioCasePreviewProps> = ({ data, fullWidth }) => {

  const {
    casePreviewImage,
    title,
    subtitle,
    caseCategories,
    caseSummary,
    detailPageSlug,
  } = data

  const { asPath } = useRouter()

  useEffect(() => {
    window.addEventListener('resize', windowResizeHandler)
    setMainContentHeight(mainContentContainerRef.current?.clientHeight || 100)

    return () => window.removeEventListener('resize', windowResizeHandler)
  }, [])

  const windowResizeHandler = () => {
    setMainContentHeight(mainContentContainerRef.current?.clientHeight || 100)
  }

  const metaDataContainerRef = useRef<HTMLDivElement>(null)
  const mainContentContainerRef = useRef<HTMLDivElement>(null)
  const [mainContentHeight, setMainContentHeight] = useState(mainContentContainerRef.current?.clientHeight || 100)

  return (
    <Link href={`${asPath}/?case=${detailPageSlug}`} passHref>
    <Container fullWidth={fullWidth} >
      <CoverImage imageSrc={casePreviewImage.fields.file.url} />
      <MetadataContainer ref={metaDataContainerRef} mainContentHeight={mainContentHeight} >
        <MainContentContainer ref={mainContentContainerRef}>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <CaseCategories caseCategories={caseCategories} />
        </MainContentContainer>
        <CaseSummary>{caseSummary}</CaseSummary>
        <ReadMoreLink href={`${asPath}/?case=${detailPageSlug}`} />
      </MetadataContainer>
    </Container>
    </Link>
  )
}

export default PortfolioCasePreview