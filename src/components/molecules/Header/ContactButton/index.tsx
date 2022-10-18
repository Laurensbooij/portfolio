import React, { useEffect, useState, useRef } from 'react'

import Link from 'next/link'

import { Container, Text, Icon } from './styled'


const ContactButton = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(120)
  
  useEffect(() => {
    setContainerWidth(containerRef.current?.clientWidth || 120)
  })

  return (
    <Link href="mailto: business@laurensbooij.com" passHref>
      <Container ref={containerRef} containerWidth={containerWidth}>
        <Icon/>
        <Text>Contact me</Text>
      </Container>
    </Link>
  )
}


export default ContactButton