import React from "react";
import { Flex, Grid, Spinner, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { ContactCard } from "./ContactCard.jsx";
import USERS from "../Mocks/ContactListMock.js"

const ContactGrid = () =>{

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
            
            {USERS.map((user) => (
                
                <ContactCard key={user.id} user = {user} />
            ))}
        </Grid>
        </>
    )
}
export default ContactGrid