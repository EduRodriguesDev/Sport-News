import { Flex, Img, Text } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticPropsContext } from 'next'

import { DefaultLayout } from '../../layout/DefaultLayout'
import { FloatingSocial } from '../../components/FloatingSocial'
import { Header } from '../../components/Header'
import { PrismicRichText } from '@prismicio/react'
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
    first_field_article: []
    second_field_article: []
    image_information: { url: string }
  }
}

interface NewsProps {
  post: Post
}

export default function News({ post }: NewsProps) {
  return (
    <DefaultLayout>
      <Flex
        as="article"
        m={['1.75rem auto 0', '3rem auto 0']}
        w={['80%', '50%']}
        pb="2rem"
        alignItems="center"
        flexDir="column"
        color="gray.200"
        gap="2rem"
        pos="relative"
      >
        <Text
          pos="absolute"
          top={['-2.5rem', '-2rem']}
          left="0"
          fontSize={['0.625rem', '0.75rem']}
        >
          Publicado em{' '}
          {new Date(post.first_publication_date).toLocaleDateString('pt-br', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}
        </Text>

        <Text
          pos="absolute"
          top={['-1.25rem', '-2rem']}
          left={['0', '10.5rem']}
          fontSize={['0.625rem', '0.75rem']}
        >
          Editado em{' '}
          {new Date(post.last_publication_date).toLocaleDateString('pt-br', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
          })}
        </Text>

        <Img
          src={post.data.banner.url}
          alt="banner"
          w="100%"
          h={['8rem', '15rem']}
        />

        <Text fontSize={['1.5rem', '2rem']}>{post.data.title}</Text>

        <PrismicRichText field={post.data.first_field_article} />

        {post.data.image_information.url && (
          <Img
            src={post.data.image_information.url}
            w={['15rem', '35rem']}
            h={['10rem', '15rem']}
          />
        )}

        <PrismicRichText field={post.data.second_field_article} />
      </Flex>
    </DefaultLayout>
  )
}

export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext) {
  const prismic = getPrismicClient({ previewData })

  const post = await prismic.getByUID('notice', String(params?.slug), {})

  return {
    props: { post },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
