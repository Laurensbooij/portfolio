import React, { FC } from 'react'

import CardContainer from 'components/atoms/CardContainer'

import { TitleContainer, IconContainer, Icon, Title, Text } from './styled'
import RichText from 'components/atoms/RichText'

interface aboutMeContentProps {
  iconUrl: any,
  title: string,
  textContent: any,
}

const AboutMeContent: FC<aboutMeContentProps> = ({ iconUrl, title, textContent }) => (
  <CardContainer>
    <TitleContainer>
      <IconContainer>
        <Icon iconUrl={iconUrl} />
      </IconContainer>
      <Title>{title}</Title>
    </TitleContainer>
    <RichText content={textContent}/>
  </CardContainer>
)

export default AboutMeContent