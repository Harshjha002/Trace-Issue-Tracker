
import { Box, Card, Flex, Heading,Text } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const LoadingIssueDetailPage = () => {
  return (
    <Box className='max-w-xl'>
      <Heading><Skeleton/></Heading>
      <Flex gap='3' my='4'>
      <Skeleton width="5rem"/>
      <Text><Skeleton width='8rem'/></Text>
      </Flex>
      <Card className='prose ' mt="5">
      <Skeleton count={3}/>
      </Card>
    </Box>
  )
}

export default LoadingIssueDetailPage
