import React, { FC } from 'react'

import { Entry } from 'contentful'
import { workExperienceDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import WorkExperienceCard from './WorkExperienceCard'

import { Container } from './styled'

interface workExperienceProps {
  data: Entry<workExperienceDataProps>[]
}

const WorkExperience: FC<workExperienceProps> = ({ data }) => {

  const sortedData = data.sort((a, b) => a.fields.order > b.fields.order ? 1 : -1)

  const workExperienceCards = sortedData.map((item: Entry<workExperienceDataProps>) => (
    <WorkExperienceCard
      key={item.sys.id} 
      data={item.fields}
    />
  ))

  return (
    <Container>
      {workExperienceCards}
    </Container>
  )
}

export default WorkExperience