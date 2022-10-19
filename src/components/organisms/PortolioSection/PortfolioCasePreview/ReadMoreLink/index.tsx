import React, { FC } from 'react'

import Link from 'next/link'

import { LinkBody } from './styled'

interface readMoreLinkProps {
  href: string,
}

const ReadMoreLink: FC<readMoreLinkProps> = ({ href }) => (
  <Link href={href} passHref>
    <LinkBody>Read more</LinkBody>
  </Link>
)

export default ReadMoreLink