import React, { FC } from 'react'

import { Container, Title, Subtitle, DateRange } from './styled'

interface metaDataProps {
  title: string,
  subtitle?: string,
  dateRange: string
}

const MetaData: FC<metaDataProps> = ({ title, subtitle, dateRange }) => (
  <Container>
    <Title>{title}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    <DateRange>{dateRange}</DateRange>
  </Container>
)

export default MetaData