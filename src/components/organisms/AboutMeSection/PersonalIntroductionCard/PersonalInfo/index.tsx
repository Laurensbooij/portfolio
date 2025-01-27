import React from 'react'

import Link from 'next/link'

import { Container, FlexContainer, InfoText } from './styled'

import ageIcon from "media/icons/icon-age.png"
import countryIcon from "media/icons/icon-Netherlands.png"
import linkedinIcon from "media/icons/icon-LinkedIn.png"
import githubIcon from "media/icons/icon-GitHub.png"

const PersonalInfo = ({  }) => (
  <Container>
    <FlexContainer>
      <InfoText iconUrl={countryIcon.src}>Amsterdam</InfoText>
    </FlexContainer>
    <FlexContainer>
      <a href="https://www.linkedin.com/in/laurens-booij/" rel="noreferrer" target="_blank">
        <InfoText iconUrl={linkedinIcon.src} isLink>Linkedin</InfoText>
      </a>
      <a href="https://github.com/laurensbooij" rel="noreferrer" target="_blank">
        <InfoText iconUrl={githubIcon.src} isLink>github.com/laurensbooij</InfoText>
      </a>
    </FlexContainer>
  </Container>
)

export default PersonalInfo