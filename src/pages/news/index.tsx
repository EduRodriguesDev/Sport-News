import * as prismic from '@prismicio/client'

import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FormEvent, useState } from 'react'

import { DefaultLayout } from '../../layout/DefaultLayout'
import { FloatingSocial } from '../../components/FloatingSocial'
import { GetStaticPropsContext } from 'next'
import { MagnifyingGlass } from 'phosphor-react'
import { NewsCard } from '../../components/NewsCard'
import { getPrismicClient } from '../../services/prismic'

type Post = {
  slugs: [string]
  uid: string
  first_publication_date: string
  last_publication_date: string
  data: {
    title: string
    subtitle: string
    banner: { url: string }
  }
}

interface PostsProps {
  posts: Post[]
}

interface PostFiltered {
  posts: Post[] | undefined
}

export default function News({ posts }: PostsProps) {
  const isWideVersion = useBreakpointValue({
    sm: false,
    lg: true,
  })
  const [searchText, setSearchText] = useState('')
  const [postsFiltered, setPostFiltered] = useState<PostFiltered[]>([])

  function handleFindingPost(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <DefaultLayout>
      <VStack px={['0.5rem', '0rem']} mt={['1rem', '1.5rem']} spacing="1rem">
        {posts.map((post) => {
          return <NewsCard key={post.uid} post={post} />
        })}
      </VStack>
      {isWideVersion && <FloatingSocial />}
    </DefaultLayout>
  )
}

export async function getStaticProps({
  previewData,
  params,
}: GetStaticPropsContext) {
  const client = getPrismicClient({ previewData })

  const posts = await client.getAllByType('notice', params)

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}
