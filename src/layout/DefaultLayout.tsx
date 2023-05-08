import { Box } from '@chakra-ui/react'
import { Header } from '../components/Header'

interface DefaultLayoutProps {
  children: React.ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Box maxW="1440px" m="0 auto" h="100vh" pos="relative">
      <Header />
      {children}
    </Box>
  )
}
