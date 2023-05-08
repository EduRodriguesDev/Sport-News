import { Box, Flex, Img, Text, useBreakpointValue } from '@chakra-ui/react'

import { DefaultLayout } from '../layout/DefaultLayout'
import { FloatingSocial } from '../components/FloatingSocial'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    lg: true,
    sm: false,
  })

  return (
    <DefaultLayout>
      <Box
        p="6rem"
        display="flex"
        flexDir={['column', 'column', 'column', 'row']}
        alignItems="center"
        justifyContent={['center', 'center', 'flex-start', 'space-around']}
        height="calc(100vh - 6rem)"
        gap={['1.25rem', '1.5rem', '0rem']}
      >
        <Flex
          flexDir="column"
          gap={['1rem', '2.5rem', '4rem']}
          w={['15rem', '30rem']}
        >
          <Text
            color="white"
            fontWeight="bold"
            fontSize={['1.5rem', '1.5rem', '2.5rem', '4rem']}
          >
            Seu site do mundo dos ESPORTES
          </Text>
          <Text
            fontSize={['0.75rem', '0.825rem', '1rem', '1.4rem']}
            color="white"
            w={['10rem', '25rem', '30rem', '40rem']}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio
            rem beatae alias accusantium non. Quibusdam non soluta cupiditate,
            delectus sapiente optio alias dolor quae reprehenderit, eos autem
            rerum nihil.
          </Text>
        </Flex>
        <Img
          src="/soccerPlayer.png"
          alt="soccer player"
          height={[250, 200, 300, 500]}
          width={[150, 175, 250, 350]}
        />
      </Box>
      <FloatingSocial />
    </DefaultLayout>
  )
}

export default Home
