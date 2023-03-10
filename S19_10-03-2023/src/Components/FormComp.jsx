import React from 'react';
import {Box,Input,Button,Checkbox,Radio,Heading} from "@chakra-ui/react"
import MenuComp from './Menu';

function FormComp(props) {
    return (
        <Box w="300px" m="auto">
            <Heading>Register User</Heading>
               <form>
                <Input type="text" placeholder="Enter Name" my="15px"/>
                <Input type="password" placeholder="Enter Password" my="15px"/>
                <Input type="email" placeholder="Enter Email" my="15px"/>
                <Input type="phone" placeholder="Enter Phone" my="15px"/>
                <Checkbox size='md' colorScheme='red'>
    HTML
  </Checkbox>
  <Checkbox size='md' colorScheme='green' defaultChecked>
    React
  </Checkbox>
  <Checkbox size='md' colorScheme='orange' >
    Jsavascript
  </Checkbox>
                <MenuComp />
                <Button bg="green" color="white" my="20px">Register</Button>
               </form>
        </Box>
    );
}

export default FormComp;