import React, { FC } from 'react'

import { useNavToggleContext } from 'contexts/NavToggleContext'

import { Entry } from 'contentful'
import { educationExperienceDataProps, workExperienceDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import WorkExperience from './WorkExperience'
import EducationExperience from './EducationExperience'

import { Container, ScrollContainer } from './styled'

interface resumeSectionProps {
  workExperienceData: Entry<workExperienceDataProps>[],
  educationExperienceData: Entry<educationExperienceDataProps>[]
}

const ResumeSection: FC<resumeSectionProps> = ({ workExperienceData, educationExperienceData }) => {
  
  const { navToggleState } = useNavToggleContext()
  const { toggled } = navToggleState

  return (
   <Container>
      <ScrollContainer toggled={toggled} >
        <WorkExperience data={workExperienceData} inView={!toggled} />
        <EducationExperience data={educationExperienceData} inView={toggled} />
      </ScrollContainer>
    </Container>
  )
}

export default ResumeSection