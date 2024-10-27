import { Box, Button, Container, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { ModalCreateUser } from "./ModalCreateUser"


const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Container maxW={"900px"}>
			<Box px={4} my={4} borderRadius={5} bg={useColorModeValue("gray.200", "gray.700")}>
				<Flex h='16' alignItems={"center"} justifyContent={"space-between"}>
					{/* Left side */}
					<Flex
						alignItems={"center"}
						justifyContent={"center"}
						gap={3}
						display={{ base: "none", sm: "flex" }}
					>
                        <img src={useColorModeValue('chrispyIT_black.png', 'chrispyIT_color.png')} width={60}/>
						<Text fontSize={"40px"}>+</Text>
						<img src={useColorModeValue('react-seeklogo.svg', 'react.png')} width={50}/>
						<Text fontSize={"40px"}>+</Text>
						<img src='/python.png' alt='Python logo' width={50} height={40} />
						<Text fontSize={"40px"}>=
                        <Button>Project info</Button>
                        </Text>
					</Flex>
					{/* Right side */}
					<Flex gap={3} alignItems={"center"}>
						<Button onClick={toggleColorMode}>
							{colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
						</Button>
                        <ModalCreateUser/>
						
					</Flex>
				</Flex>
			</Box>
		</Container>
	);
};
export default Navbar;