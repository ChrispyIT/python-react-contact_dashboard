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
import { BiEditAlt } from "react-icons/bi";

import {React, useState} from 'react'
import { BASE_URL } from "../App"


export const EditModal = ({contact, setContacts}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
	const [inputs, setInputs] = useState({
		email: contact.email,
		role: contact.role,
		description: contact.description,
	});
    const info = contact.name
	const toast = useToast();
    const handleEditContact = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const res = await fetch(BASE_URL + "/update_friend/" + contact.id, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(inputs),
			});
			const data = await res.json();
			if (!res.ok) {
				throw new Error(data.error);
			}
            setContacts((prevContact) => prevContact.map((c) => (c.id === contact.id ? data : c)))		
			toast({
				status: "success",
				title: info+" successfully updated",
				description: "",
				duration: 2000,
				position: "top-center",
			});            
			onClose()            
		} catch (error) {
			toast({
				status: "error",
				title: "An error occurred.",
				description: error.message,
				duration: 4000,
				position: "top-center",
			});
		} finally {
			setIsLoading(false);
		}
	};
    return (
        <>
            <IconButton
                onClick={onOpen}
                variant='ghost'
                colorScheme='blue'
                aria-label='See menu'
                size={"sm"}
                icon={<BiEditAlt size={20} />}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <form onSubmit={handleEditContact}>
                <ModalContent>
                    <ModalHeader>{contact.name}                      
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Flex alignItems={"center"} gap={4}>
                        <FormControl>
                                <FormLabel>Change Email</FormLabel>
                                <Input placeholder='example@email.tryout'
                                value={inputs.email}
                                onChange={(e)=> setInputs((prev)=> ({...prev, email : e.target.value}))} />
                            </FormControl>                            
                        </Flex>
                        <Flex alignItems={"center"} gap={4} mt={4}>
                        <FormControl>
                                <FormLabel>Change Role</FormLabel>
                                <Input placeholder=''
                                value={inputs.role}
                                onChange={(e)=> setInputs((prev)=> ({...prev, role : e.target.value}))}  />
                            </FormControl>                            
                        </Flex>
                        <Flex alignItems={"center"} gap={4} mt={4}>
                        <FormControl>
                                <FormLabel>Change Description</FormLabel>
                                <Input placeholder='' 
                                value={inputs.description}
                                onChange={(e) => setInputs((prev) => ({ ...prev, description: e.target.value }))} />
                            </FormControl>                            
                        </Flex>
                                 
                    </ModalBody>
                    <ModalFooter>
                        <Button type="confirm" isLoading={isLoading} colorScheme='blue' mr={3}>
                            Confirm
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
                </form>
            </Modal>
        </>
    );
}
