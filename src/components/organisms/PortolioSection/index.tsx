import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Entry } from 'contentful'
import { portfolioCaseDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import GridContainer from 'components/atoms/GridContainer'
import PortfolioCasePreview from './PortfolioCasePreview'
import CaseOverview from './CaseOverview'

interface portfolioSectionProps {
  portfolioCasesData: Entry<portfolioCaseDataProps>[],
}

const PortfolioSection: FC<portfolioSectionProps> = ({ portfolioCasesData }) => {
  
  const router = useRouter()
  const caseDetailParam = router.query.case
  const displayedCaseData = portfolioCasesData.find(porfolioCase => porfolioCase.fields.detailPageSlug === caseDetailParam)

  useEffect(() => {
    displayedCaseData ? window.document.body.classList.add('noscroll') : window.document.body.classList.remove('noscroll')

    return () => window.document.body.classList.remove('noscroll')
  })

  const sortedPortfolioCasesData = portfolioCasesData.sort((a, b) => a.fields.order > b.fields.order ? 1 : -1)
  const PortfolioCasePreviews = sortedPortfolioCasesData.map((caseData, index) => {
    let fullWidth = false
    if (((index) % 3) === 0 || index === 0) {
      fullWidth = true
    }
  
    return (
      <PortfolioCasePreview 
        key={caseData.sys.id}
        data={caseData.fields}
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