import React from "react"
import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, IconButton, Text, useToast } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react"
import { EditModal } from "./EditModal"
import { DeleteModal} from "./DeleteModal"

export const ContactCard = ({contact, setContacts, setIsLoading, reloadGrid}) => {
    return (
		
		<Card> 
			<Flex>
				<img src={useColorModeValue('chrispyIT_black.png', 'chrispyIT_color.png')} width={70}/>
				<Flex pl={"65%"}>
				<EditModal contact={contact} setContacts={setContacts} />
				<DeleteModal contact={contact} reloadGrid={reloadGrid}/>			
						</Flex>
				</Flex>
			
			<CardHeader>			
							<Flex gap={4} >
					<Flex flex={"1"} gap={"4"} alignItems={"center"} >
						<Avatar src= {contact.imgUrl} />

						<Box >
							<Heading size='sm'>{contact.name}</Heading>
							<Text>{contact.email}</Text>
							<Text>{contact.role}</Text>							
						</Box>
					</Flex>

					<Flex>
						
						
					</Flex>
				</Flex>
			</CardHeader>

			<CardBody >
				<Text>{contact.description}</Text>
			</CardBody>
		</Card>
	);
}

