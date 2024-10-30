import {React} from "react";
import { Flex, Grid, Button} from "@chakra-ui/react";
import { ContactCard } from "./ContactCard.jsx";
import { useEffect, useState } from "react";
import { BASE_URL } from "../App"
import { useForceUpdate } from "framer-motion";

const ContactGrid = ({contacts, setContacts}) =>{
    const [isLoading, setIsLoading] = useState(true)
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
    useEffect(() => {
		getContacts();
	},[setContacts] );

    function reloadGrid() {
        getContacts()
      }

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
                
                <ContactCard key={contact.id} contact = {contact} setContacts={setContacts} reloadGrid={reloadGrid}/>
            ))}
        </Grid>
        </>
    )
}
export default ContactGrid