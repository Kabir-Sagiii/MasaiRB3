import React from 'react';
import {useDisclosure,Button,AlertDialog, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, AlertDialogContent} from '@chakra-ui/react'

function Alert(props) {
    const {isOpen,onClose,onOpen} = useDisclosure()
    console.log(isOpen)
    return (
        <div>
            <h1>-------------{isOpen}</h1>
            <Button onClick={onOpen}>Open Alert</Button>
            <AlertDialog isOpen={isOpen}>
                <AlertDialogContent>
                <AlertDialogHeader>
                    <h3>Delete </h3>
                </AlertDialogHeader>
                <AlertDialogBody>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, rerum officiis? Commodi, quam. Quam magnam laudantium modi illo culpa? Maiores sed porro consectetur ut quam nisi voluptate, a laudantium placeat similique expedita quasi fuga cum nesciunt vel sunt veritatis deleniti quaerat repellat aliquid! Amet asperiores illum eveniet. Voluptatibus, est repudiandae.</p>
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button>Save</Button>
                </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}

export default Alert;