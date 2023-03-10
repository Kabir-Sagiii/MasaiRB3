import React from 'react';
import {Box, Button, Flex, HStack,Heading} from '@chakra-ui/react'

function FlexComp(props) {
    return (
        <Flex bg="green.900" p={2}  justify="space-between" >
              <Box>
                <Heading color="white">Chakra UI</Heading>
              </Box>
              <HStack>
              <Button >Sign In</Button>
              <Button >Sign Up</Button>
              </HStack>
              
        </Flex>
    );
}

export default FlexComp;