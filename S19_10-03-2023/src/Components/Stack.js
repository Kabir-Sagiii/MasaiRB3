import React from 'react';
import {HStack,Box,VStack,Stack,useBreakpoint} from '@chakra-ui/react'

function StackComp(props) {
  const variant = useBreakpoint({
    base:"red",
    sm:"black",
    md:"red",
    lg:"green"
  })
  const wi = useBreakpoint({
    base:"600px",
    sm:"700px",
    md:"800px",
    lg:"green"
  })
    return (
    
       
//             <Stack w={["300px","800px","1200px"]} spacing='24px'>
//   <Box w='40px' h='40px' bg='yellow.200'>
//     1
//   </Box>
//   <Box w='40px' h='40px' bg='tomato'>
//     2
//   </Box>
//   <Box w='40px' h='40px' bg='pink.100'>
//     3
//   </Box>
// </Stack>
/*
base
sm - 480px
md - 768px
lg - 992px
xl - 1280px

*/
<Box bg={["red","black","green"]} w={[300, 400, 900]}>
  This is responsive text
</Box>
       
    );
}

export default StackComp;