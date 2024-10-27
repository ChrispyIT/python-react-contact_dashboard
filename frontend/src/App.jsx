import Navbar from "./components/Navbar"
import ContactGrid from "./components/ContactGrid"
import { Stack, Container} from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react"



function App() {


  return (
    <Stack minH={"100vh"}>
			<Navbar/>

			<Container maxW={"1200px"} my={4}>
      <img src={useColorModeValue('chrispyIT_black.png', 'chrispyIT_color.png')}/>
				<ContactGrid/>
			</Container>
		</Stack>
  )
}
export default App
