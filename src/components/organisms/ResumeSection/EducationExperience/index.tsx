import React, { FC } from 'react'

import { Entry } from 'contentful'
import { educationExperienceDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import EducationExperienceCard from './EducationExperienceCard'

import { Container } from './styled'
 
interface educationExperienceProps {
  data: Entry<educationExperienceDataProps>[],
  inView: boolean,
}

const EducationExperience: FC<educationExperienceProps> = ({ data, inView }) => {

  const sortedData = data.sort((a, b) => a.fields.order > b.fields.order ? -1 : 1)
  
  const educationExperienceCards = sortedData.map((item: Entry<educationExperienceDataProps>) => (
    <EducationExperienceCard
      key={item.sys.id} 
      data={item.fields}
    />
  ))

  return (
    <Container inView={inView} >
      {educationExperienceCards}
    </Container>
  )
}

export default EducationExperience
