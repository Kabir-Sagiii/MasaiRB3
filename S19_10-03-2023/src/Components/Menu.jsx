import React from 'react';
import {Menu,MenuButton,MenuItem,MenuList,Button} from "@chakra-ui/react"
import {ChevronDownIcon} from "@chakra-ui/icons"


function MenuComp(props) {
    return (
        <div>

            <Menu>
              {
                ({isOpen})=>(
                    <>
                    <MenuButton as={Button}  rightIcon={<ChevronDownIcon />}>
                 {isOpen? "Close Menu" :"Select City"}
              </MenuButton>
              <MenuList>
    <MenuItem>Delhi</MenuItem>
    <MenuItem>Hyderabad</MenuItem>
    <MenuItem>Banglore</MenuItem>
    <MenuItem>Pune</MenuItem>
    <MenuItem>Gurugram</MenuItem>
  </MenuList>
  </>
                )
              }
            </Menu>
             {/* <select>
                <option>Select City</option>
                <option>Delhi</option>
                <option>Hyderbad</option>
                <option>Banglore</option>
             </select> */}
        </div>
    );
}

export default MenuComp;