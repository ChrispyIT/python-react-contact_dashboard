import Navbar from "./components/Navbar"
import ContactGrid from "./components/ContactGrid"
import { Stack, Container, useColorModeValue} from "@chakra-ui/react"
import { useState } from "react"


export const BASE_URL = import.meta.env.MODE === "development" ? "http://127.0.0.1:5000/api" : "/api"

function App() {
	const [contacts, setContacts] = useState([]);

  return (
    <Stack minH={"100vh"} >
			<Navbar/>
			<Container maxW={"1200px"} my={4} >
					
				<ContactGrid contacts = {contacts} setContacts={setContacts}/>
				
			</Container>
		</Stack>
  )
}
export default App
