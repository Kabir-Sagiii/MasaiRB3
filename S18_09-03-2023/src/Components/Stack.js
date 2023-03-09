import React from 'react';
import {HStack,Box,VStack,Stack} from '@chakra-ui/react'

function StackComp(props) {
    return (
       
            <Stack direction={['column', 'row']} spacing='24px'>
  <Box w='40px' h='40px' bg='yellow.200'>
    1
  </Box>
  <Box w='40px' h='40px' bg='tomato'>
    2
  </Box>
  <Box w='40px' h='40px' bg='pink.100'>
    3
  </Box>
</Stack>
       
    );
}

export default StackComp;