import React from 'react'
import IssueStatusBadge from '@/components/IssueStatusBadge'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { Card,Flex,Heading,Text } from '@radix-ui/themes'


interface Props{
    params:{id:string}
}

const IssueDetailPage = async ({params} : Props) => {

    const issue = await prisma.issue.findUnique({
       where: {id:parseInt(params.id)}
    })

    if (!issue) notFound();

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

export default IssueDetailPage
