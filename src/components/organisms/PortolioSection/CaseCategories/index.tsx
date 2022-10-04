import React, { FC } from 'react'

import { Container, CategoryItem } from './styled'

interface caseCategoriesProps {
  caseCategories: ReadonlyArray<string>,
  isOverviewPage?: boolean,
}

const CaseCategories: FC<caseCategoriesProps> = ({ caseCategories, isOverviewPage }) => {

  const categoriesList = caseCategories.map((category: string, index: number) => (
    <CategoryItem 
      key={`${index}-${category}`}
      isOverviewPage={isOverviewPage}
    >
      {category}
    </CategoryItem>
  ))

  return (
    <Container>
      {categoriesList}
    </Container>
  )
}


export default CaseCategories