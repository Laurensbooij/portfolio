import React, { FC } from 'react'

import RichText from 'components/atoms/RichText'

import { Container, TitleContainer, Title, Subtitle, Text } from './styled'

interface jobRoleDescriptionProps {
  title: string,
  subtitle?: string | undefined,
  description?: { content: any, data: any, nodeType: string } | undefined,
  indented: boolean,
}

const JobRoleDescription: FC<jobRoleDescriptionProps> = ({ title, subtitle, description, indented }) => (
  <Container indented={indented}>
    <TitleContainer>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </TitleContainer>
    {description && <RichText content={description.content} />}
  </Container>
)

export default JobRoleDescription