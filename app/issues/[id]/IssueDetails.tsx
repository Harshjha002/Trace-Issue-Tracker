import IssueStatusBadge from '@/components/IssueStatusBadge'
import { Issue } from '@prisma/client'
import { Card, Flex, Heading,Text } from '@radix-ui/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'


const IssueDetails = ({issue} : {issue:Issue}) => {
  return (
    <div>
      <Heading>
        {issue?.title}
      </Heading>
      <Flex my='3' mt='6' gap='4'>
      <IssueStatusBadge status={issue?.status}/>
      <Text>{issue?.createAt.toDateString()}</Text>
      </Flex>
      <Card className='prose' mt='6'>      
            <ReactMarkdown>
              {issue?.description}
            </ReactMarkdown>
      </Card>
    </div>
  )
}

export default IssueDetails
