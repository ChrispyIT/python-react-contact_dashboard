import Navbar from "./components/Navbar"
import ContactGrid from "./components/ContactGrid"
import { Stack, Container, useColorModeValue} from "@chakra-ui/react"




function App() {


  return (
    <Stack minH={"100vh"} >
			<Navbar/>
			<Container maxW={"1200px"} my={4} >
					
				<ContactGrid />
				
			</Container>
		</Stack>
  )
}
export default App
