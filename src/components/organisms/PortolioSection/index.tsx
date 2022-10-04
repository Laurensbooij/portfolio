import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Entry } from 'contentful'
import { portfolioCaseDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import GridContainer from 'components/atoms/GridContainer'
import PortfolioCasePreview from './PortfolioCasePreview'
import CaseOverview from './CaseOverview'

const mockData = [{ name: 'test', slug: 'test'}, { name: 'test', slug: 'test'}, { name: 'Reppinbars', slug: 'reppinbars'}, { name: 'test', slug: 'test'}, { name: 'test', slug: 'test'}, { name: 'test', slug: 'test'}]

interface portfolioSectionProps {
  portfolioCasesData: Entry<portfolioCaseDataProps>[],
}

const PortfolioSection: FC<portfolioSectionProps> = ({ portfolioCasesData }) => {
  
  const router = useRouter()
  const caseDetailParam = router.query.case
  const displayedCaseData = portfolioCasesData.find(porfolioCase => porfolioCase.fields.detailPageSlug === caseDetailParam)

  useEffect(() => {
    displayedCaseData ? window.document.body.classList.add('noscroll') : window.document.body.classList.remove('noscroll')
  })

  const PortfolioCasePreviews = mockData.map((caseData, index) => {
    let fullWidth = false
    if (((index) % 3) === 0 || index === 0) {
      fullWidth = true
    }
  
    return (
      <PortfolioCasePreview 
        key={portfolioCasesData[0].sys.id}
        data={portfolioCasesData[0].fields}
        fullWidth={fullWidth}
      />
    )
  })

  return (
    <GridContainer>
      {PortfolioCasePreviews}
      {displayedCaseData && <CaseOverview caseData={displayedCaseData.fields} />}
    </GridContainer>
  )
}

export default PortfolioSection