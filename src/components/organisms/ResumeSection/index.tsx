import React, { FC } from 'react'

import { Entry } from 'contentful'
import { educationExperienceDataProps, workExperienceDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import WorkExperience from './WorkExperience'
import EducationExperience from './EducationExperience'

import { Container } from './styled'

interface resumeSectionProps {
  workExperienceData: Entry<workExperienceDataProps>[],
  educationExperienceData: Entry<educationExperienceDataProps>[]
}

const ResumeSection: FC<resumeSectionProps> = ({ workExperienceData, educationExperienceData }) => (
  <Container>
    {/* <WorkExperience data={workExperienceData} /> */}
    <EducationExperience data={educationExperienceData} />
  </Container>
)

export default ResumeSection