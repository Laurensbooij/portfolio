import React, { FC } from 'react'

import { workExperienceDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import JobRoles from './JobRoles'
import Cta from './Cta'

import { 
  StyledCardContainer,
  MetadataContainer,
  FlexContainer,
  Logo,
  TitleContainer,
  Title,
  Subtitle,
  DurationContainer,
  Duration,
  Daterange,
  ContentContainer,
} from './styled'

interface workExperienceCardProps {
  data: workExperienceDataProps,
}

const WorkExperienceCard: FC<workExperienceCardProps> = ({ data }) => {

  const {
    companyDescription,
    companyLogo,
    companyName,
    cta,
    jobRoles,
    workDuration,
    workDurationPeriod,
  } = data

  console.log(jobRoles)

  return (
    <StyledCardContainer>
      <MetadataContainer>
        <DurationContainer>
          <Duration>{workDuration}</Duration>
          <Daterange>{workDurationPeriod}</Daterange>
        </DurationContainer>
        <FlexContainer>
          <Logo src={companyLogo.fields.file.url} />
          <TitleContainer>
            <Title>{companyName}</Title>
            {companyDescription && <Subtitle>{companyDescription}</Subtitle>}
          </TitleContainer>
        </FlexContainer>
      </MetadataContainer>
      <ContentContainer>
        <JobRoles jobRoles={jobRoles} />
        {cta && (
          <Cta data={cta.fields} />
        )}
      </ContentContainer>
    </StyledCardContainer>
  )
}

export default WorkExperienceCard