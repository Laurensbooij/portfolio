import React, { FC } from 'react'

import { educationExperienceDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import CardContainer from 'components/atoms/CardContainer'
import RichText from 'components/atoms/RichText'

import Highlight from './Highlight'
import MetaData from './MetaData'

interface educationExperienceCardProps {
  data: educationExperienceDataProps,
}

const EducationExperienceCard: FC<educationExperienceCardProps> = ({ data }) => {

  const {
    educationTitle,
    educationSubtitle,
    educationDescription,
    dateRange,
    achievementHighlight
  } = data

  return (
    <CardContainer>
      {achievementHighlight && <Highlight text={achievementHighlight} />}
      <MetaData 
        title={educationTitle}
        subtitle={educationSubtitle}
        dateRange={dateRange}
      />
      {educationDescription && <RichText content={educationDescription.content} />}
    </CardContainer>
  )
}

export default EducationExperienceCard