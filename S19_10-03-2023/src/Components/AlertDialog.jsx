import React from 'react';
import {Button,useDisclosure,AlertDialogCloseButton,AlertDialogOverlay,
    AlertDialog,AlertDialogContent,AlertDialogHeader,AlertDialogBody,AlertDialogFooter} from '@chakra-ui/react'

function AlertDialogComp(props) {
    const {isOpen,onOpen,onClose}  = useDisclosure()
    return (
        <div>
            <Button bg="red" color="white" onClick={onOpen}>Open alert Dialog</Button>

            <AlertDialog isOpen={isOpen}>
            <AlertDialogOverlay>
                 <AlertDialogContent>
                     <AlertDialogHeader>
                        <h2>Delete User</h2>
                        <AlertDialogCloseButton onClick={onClose} />
                     </AlertDialogHeader>
                     <AlertDialogBody>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sequi similique ipsam ipsa tempore modi. Facere dolorum suscipit eos, eligendi velit ullam debitis magni enim veniam, sint neque ipsam esse culpa soluta dolorem, modi natus aut et. Commodi, tenetur sequi?</p>
                     </AlertDialogBody>
                     <AlertDialogFooter>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button>Delete</Button>
                     </AlertDialogFooter>
                 </AlertDialogContent>
               </AlertDialogOverlay>
            </AlertDialog>
        </div>
    );
}

export default AlertDialogComp;