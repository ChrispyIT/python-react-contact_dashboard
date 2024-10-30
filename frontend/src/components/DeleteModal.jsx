import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
    useDisclosure,
    useToast,
    Text
} from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";

import {React, useState} from 'react'
import { BASE_URL } from "../App"


export const DeleteModal = ({contact, reloadGrid}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLoading, setIsLoading] = useState(false)
    const info = contact.name
	const toast = useToast()
    const handleDeleteContact = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		try {
			const res = await fetch(BASE_URL + "/delete_friend/" + contact.id, {
				method: "DELETE",
			})
			const data = await res.json()
			if (!res.ok) {
				throw new Error(data.error)
			}
			toast({
				status: "success",
				title: info+" successfully deleted",
				description: "",
				duration: 2000,
				position: "top-center",
			})           
			onClose() 
            reloadGrid()                  
		} catch (error) {
			toast({
				status: "error",
				title: "An error occurred.",
				description: error.message,
				duration: 4000,
				position: "top-center",
			})
		} finally {
		    setIsLoading(false)
            reloadGrid()  
		}
        
	}
    return (
      <>
         <IconButton
                            onClick={onOpen}
 							variant='ghost'	
 							colorScheme='blue'						
 							size={"sm"}
 							aria-label='See menu'
 							icon={<BiTrash size={20} />}
							
 						/>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>You are about to delete {contact.name} </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            This action is irreversible. Do you really want to do it?
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='red' mr={3} onClick={handleDeleteContact}>
                Do it
              </Button>
              <Button colorScheme="green" onClick={onClose} isLoading={isLoading}>Maybe not</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

  


