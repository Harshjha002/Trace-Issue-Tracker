import React from 'react'
import { Flex,  Button } from "@radix-ui/themes";
import Link from 'next/link';

const IssuesPage = () => {
  return (
    <div className='max-w-xl'>
      <Flex direction="column" gap="2">
			<Button><Link href={'/issues/new'}>New Issue</Link></Button>
		</Flex>
    </div>
  )
}

export default IssuesPage
