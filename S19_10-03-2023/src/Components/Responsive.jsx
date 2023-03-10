import React from 'react';
import {Box,useBreakpointValue} from "@chakra-ui/react"

function Responsive(props) {
    const myValues = useBreakpointValue({
        sm:"40px",md:"70px",lg:"10px"
    })

    const mywidth = useBreakpointValue({sm:"300px",md:"700px",lg:"100px"})
    return (
        <div>
             <Box 
             fontSize={myValues}
             w={mywidth}
            //  w={{sm:"300px",md:"700px",lg:"100px"}}
            //  bg={["red","green","orange"]} 
             color={["red","green","black"]}> This is my Content</Box>
        </div>
    );
}

export default Responsive;