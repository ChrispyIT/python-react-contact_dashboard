import React from "react";
import { Flex, Grid, Spinner, Text } from "@chakra-ui/react";
import { ContactCard } from "./ContactCard.jsx";
import { useEffect, useState } from "react";
import { BASE_URL } from "../App"

const ContactGrid = ({contacts, setContacts}) =>{
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
		const getContacts = async () => {
			try {
				const response = await fetch(BASE_URL + "/friends");
				const data = await response.json();

				if (!response.ok) {
					throw new Error(data.error);
				}
				setContacts(data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};
		getContacts();
	},[setContacts] );

    return(
        <>        
        <Grid 
        
            templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
            }}
            gap={4}
        >
            
            {contacts?.map((contact) => (
                
                <ContactCard key={contact.id} user = {contact} />
            ))}
        </Grid>
        </>
    )
}
export default ContactGrid