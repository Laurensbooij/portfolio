import React, { FC } from 'react'

import { workExperienceDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import JobRoleDescription from './JobRoleDescription'
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
  JobRoleContainer
} from './styled'

interface workExperienceCardProps {
  data: workExperienceDataProps,
}

const WorkExperienceCard: FC<workExperienceCardProps> = ({ data }) => {

  const {
    companyDescription,
    companyLogo,
    companyName,
    ctaButtonText,
    ctaText,
    ctaUrl,
    jobRole1,
    jobRoleDescription1,
    jobRoleSubtitle1,
    jobRole2,
    jobRoleDescription2,
    jobRoleSubtitle2,
    workDuration,
    workDurationPeriod
  } = data

  let displayCta: boolean = false
  if (ctaUrl && ctaButtonText) displayCta = true
  
  console.log(ctaText)
  

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
        <JobRoleContainer>
          {jobRole1 && (
            <JobRoleDescription 
              title={jobRole1}
              subtitle={jobRoleSubtitle1}
              description={jobRoleDescription1}
              indented={!!jobRole2}
            />
          )}
          {jobRole2 && (
            <JobRoleDescription 
              title={jobRole2}
              subtitle={jobRoleSubtitle2}
              description={jobRoleDescription2}
              indented={!!jobRole2}
            />
          )}
        </JobRoleContainer>
        {(ctaButtonText && ctaUrl) && (
          <Cta 
            text={ctaText?.content}
            buttonText={ctaButtonText}
            href={ctaUrl}
          />
        )}
      </ContentContainer>
    </StyledCardContainer>
  )
}

export default WorkExperienceCard