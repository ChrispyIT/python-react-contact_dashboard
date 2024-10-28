import React from 'react'
import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, IconButton, Text, useToast } from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import { useColorModeValue } from '@chakra-ui/react';

export const ContactCard = ({user}) => {
    return (
		
		<Card> <img src={useColorModeValue('chrispyIT_black.png', 'chrispyIT_color.png')} width={70}/>
			
			<CardHeader>			
							<Flex gap={4} >
					<Flex flex={"1"} gap={"4"} alignItems={"center"} >
						<Avatar src={"https://avatar.iran.liara.run/public/"} />

						<Box >
							<Heading size='sm'>{user.name}</Heading>
							<Text>{user.email}</Text>
							<Text>{user.role}</Text>							
						</Box>
					</Flex>

					<Flex>
						<IconButton
							variant='ghost'							
							size={"sm"}
							aria-label='See menu'
							icon={<BiTrash size={20} />}
							
						/>
					</Flex>
				</Flex>
			</CardHeader>

			<CardBody >
				<Text>{user.description}</Text>
			</CardBody>
		</Card>
	);
}

