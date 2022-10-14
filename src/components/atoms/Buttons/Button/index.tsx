import React, { FC } from 'react'

import Link from 'next/link'

import { Anchor } from './styled'

interface buttonProps {
  href: string,
  children: string | JSX.Element | JSX.Element[],
}

const Button: FC<buttonProps> = ({ href, children }) => (
  <Link href={href} passHref>
    <Anchor>{children}</Anchor>
  </Link>
)

export default Button