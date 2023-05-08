import { Box, Flex, Link } from '@chakra-ui/react'
import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'

export function FloatingSocial() {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      gap={['8px', '4px']}
      pos="absolute"
      bottom={['1rem', '2rem']}
      right={['1rem', '3rem']}
    >
      <Link
        fontSize={['1.5rem', '2rem']}
        color="white"
        _hover={{
          color: 'red.300',
        }}
      >
        <FacebookLogo />
      </Link>

      <Link
        fontSize={['1.5rem', '2rem']}
        color="white"
        _hover={{
          color: 'red.300',
        }}
      >
        <TwitterLogo />
      </Link>

      <Link
        color="white"
        fontSize={['1.5rem', '2rem']}
        _hover={{
          color: 'red.300',
        }}
      >
        <InstagramLogo />
      </Link>
      <Box w="2px" h="7rem" bg="white" mt="4px" />
    </Flex>
  )
}
