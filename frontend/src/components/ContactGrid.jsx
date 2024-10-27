import React from "react";
import { Flex, Grid, Spinner, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const ContactGrid = ({users, setUsers}) =>{

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
        </Grid>
        </>
    )
}
 export default ContactGrid