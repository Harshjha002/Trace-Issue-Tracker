import React from 'react'
import NextLink from 'next/link'
import { Link } from '@radix-ui/themes'

interface Props{
  href:string;
  children:string
}

const LinkComponent = ({href , children} : Props) => {
  return (
    <div>
      <NextLink href={href} passHref legacyBehavior>
        <Link>
        {children}
        </Link>

      </NextLink>
    </div>
  )
}

export default LinkComponent
