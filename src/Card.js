import { Box, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Card = props => (
  <Box
    bg={useColorModeValue('#F1F3F4', 'red')}
    py='8'
    px={{ base: '4', md: '10' }}
    shadow='base'
    rounded={{ sm: 'lg' }}
    {...props}
  />
)
