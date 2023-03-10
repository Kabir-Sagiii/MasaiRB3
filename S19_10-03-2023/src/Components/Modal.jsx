import {Input,Button,useDisclosure,Modal,ModalBody,ModalCloseButton,ModalHeader,ModalOverlay,ModalFooter,ModalContent} from '@chakra-ui/react'
function ModalComp() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form>
                <input placeholder='My input'/>
                <Input placeholder="Enter Name" size="md"/>
              </form>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalComp