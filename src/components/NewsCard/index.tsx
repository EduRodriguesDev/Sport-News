import { Box, Img, Link, Text } from '@chakra-ui/react'

type Post = {
  slugs: [string]
  uid: string
  first_publication_date: string
  data: {
    title: string
    banner: { url: string }
    subtitle: string
  }
}

interface NewsCardProps {
  post: Post
}

export function NewsCard({ post }: NewsCardProps) {
  return (
    <Link
      href={`/news/${post.uid}`}
      display="flex"
      flexDir={['column', 'row']}
      w={['15rem', '55rem']}
      p={['0.75rem', '1rem']}
      gap={['1.25rem', '2.5rem']}
      pos="relative"
      border="2px solid"
      borderColor="gray.500"
      borderRadius="8px"
      _hover={{
        borderColor: 'gray.300',
      }}
    >
      <Img
        src={post.data.banner.url}
        borderRadius="4px"
        height={['5rem', '8rem']}
        width={['100%', '19rem']}
      />
      <Box color="white">
        <Text fontSize={['0.825rem', '1.25rem']}>{post.data.title}</Text>
        <Text
          fontSize={['0.75rem', '0.825rem']}
          mt="0.325rem"
          bgGradient={[
            'linear(to-r, gray.200, gray.400 ,transparent)',
            'linear(to-b, gray.200, gray.400 ,transparent)',
          ]}
          bgClip="text"
        >
          {post.data.subtitle}
        </Text>
      </Box>
      <Text
        color="gray.400"
        pos="absolute"
        bottom="0.25rem"
        right={['0.25rem', '0.5rem']}
        fontSize={['0.625rem', '1rem']}
      >
        {new Date(post.first_publication_date).toLocaleDateString('pt-br', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })}
      </Text>
    </Link>
  )
}
