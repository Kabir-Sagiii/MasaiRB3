import {Box} from '@chakra-ui/react'

function MyBox(){
   return <div>

           <div style={{backgroundColor:"red",padding:"48px"}}>Div Element</div>

           <Box bg="tomato" p={4} as="button">Chakra UI Box Component</Box>
   </div>
}

export default MyBox