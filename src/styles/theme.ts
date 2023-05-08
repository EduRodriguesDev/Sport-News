import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  sizes: {
    xl: '1280px',
    lg: '1024px',
    md: '768px',
    sm: '640px',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        background: 'gray.900',
        color: 'gray.100',
      },
    },
  },
})
