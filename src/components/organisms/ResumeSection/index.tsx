import React, { FC } from 'react'

import { Entry } from 'contentful'
import { workExperienceDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import WorkExperience from './WorkExperience'

import { Container } from './styled'

interface resumeSectionProps {
  data: Entry<workExperienceDataProps>[],
}

const ResumeSection: FC<resumeSectionProps> = ({ data }) => (
  <Container>
    <WorkExperience data={data} />
  </Container>
)

export default ResumeSection