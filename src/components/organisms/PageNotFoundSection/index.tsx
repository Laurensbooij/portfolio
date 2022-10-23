import React from 'react'

import { Container, Icon, Title, Text } from './styled'

import notFoundImage from 'media/icons/image-page_not_found.png'

const PageNotFoundSection = () => (
  <Container>
    <Icon imgUrl={notFoundImage.src} />
    <Title>Oops.. It looks like the page you are trying to reach does not exist.</Title>
    <Text>Feel free to take a look at one of the other pages listed in the navigation.</Text>
  </Container>
)

export default PageNotFoundSection