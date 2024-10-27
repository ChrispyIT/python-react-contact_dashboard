import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Radio,
	RadioGroup,
	Textarea,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import React from 'react'
import { BiAddToQueue } from "react-icons/bi";

export const ModalCreateUser = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
		<>
			<Button onClick={onOpen}>
				<BiAddToQueue size={20} />
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<form>
					<ModalContent>
						<ModalHeader> Create new contact</ModalHeader>
						<ModalCloseButton />

						<ModalBody pb={6}>
							<Flex alignItems={"center"} gap={4}>
								{/* Left */}
								<FormControl>
									<FormLabel>Full Name</FormLabel>
									<Input
										placeholder='John Doe'
									/>
								</FormControl>                                

								{/* Right */}
								<FormControl>
									<FormLabel>Role</FormLabel>
									<Input
										placeholder='Software Engineer'
									/>
								</FormControl>
							</Flex>
                            <Flex alignItems={"center"} mt={4}>
                            <FormControl>
									<FormLabel>Email</FormLabel>
									<Input
										placeholder='123@heaven.com'
									/>
								</FormControl>
                            </Flex>

							<FormControl mt={4}>
								<FormLabel>Description</FormLabel>
								<Textarea
									resize={"none"}
									overflowY={"hidden"}
									placeholder="He's a software engineer who loves to code and build things."									
								/>
							</FormControl>

							<RadioGroup mt={4}>
								<Flex gap={5}>
									<Radio
										value='male'										
									>
										Male
									</Radio>
									<Radio
										value='female'										
									>
										Female
									</Radio>
								</Flex>
							</RadioGroup>
						</ModalBody>

						<ModalFooter>
							<Button mr={3} type='submit' >
								Add
							</Button>
							<Button onClick={onClose}>Cancel</Button>
						</ModalFooter>
					</ModalContent>
				</form>
			</Modal>
		</>
	)
}
