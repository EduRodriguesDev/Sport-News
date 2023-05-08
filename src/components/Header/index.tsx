import { Flex, Link, Text } from '@chakra-ui/react'

import { useRouter } from 'next/router'

export function Header() {
  const { asPath } = useRouter()

  return (
    <Flex
      w="100%"
      h="6rem"
      px={['1.5rem', '3rem']}
      bg="transparent"
      alignItems="center"
      justifyContent="space-between"
    >
      <Link
        color="white"
        fontWeight={500}
        fontSize={['1.25rem', '1.75rem']}
        href="/"
        _hover={{
          textDecoration: 'none',
          color: 'gray.300',
        }}
      >
        <Text as="span" fontWeight={700}>
          Sport
        </Text>{' '}
        News
      </Link>

      {asPath !== '/news' && (
        <Link
          href="/news"
          color="white"
          fontSize={['1rem', '1.5rem']}
          fontWeight={700}
          _hover={{
            textDecoration: 'none',
            color: 'gray.300',
          }}
        >
          Noticias
        </Link>
      )}
    </Flex>
  )
}
