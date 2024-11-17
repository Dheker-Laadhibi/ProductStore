import { Button,Container, Flex ,Text,Icon, HStack, useColorMode } from "@chakra-ui/react";
import {  FaShoppingCart  } from "react-icons/fa";
import { IoMoon } from 'react-icons/io5';
import { LuPlusSquare, LuSun } from "react-icons/lu";
import { Link as RouterLink } from "react-router-dom";
/* px represents horizental and vertical  padding  */
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();


    return (
      <Container maxW={"1140px"} px={"4px"} >

<Flex h={"16"}

alignItems={"center"}
justifyContent={"space-between"}
flexDir={{
base: "column",
sm:"row"
//base  For very small screens (base), the flex direction will be set to column, meaning elements will stack vertically.
/** For screens sm and larger (typically 480px or wider), the flex direction will switch to row */
}
 
}

>

<Text
 fontSize={{ base: "22px", sm: "28px" }}
  fontWeight={"bold"}
  textTransform={"uppercase"}
  textAlign={"center"}
bgGradient={"linear(to-r, cyan.400, blue.500)"}
bgClip={"text"}

>


<RouterLink to={"/HomePage"}>Product Store <Icon as={FaShoppingCart} boxSize={6} color="blue.500" /></RouterLink>


</Text>


<HStack spacing={2} alignItems={"center"}>
          {/* Use Link component from react-router-dom properly */}
          <RouterLink to={"/create"}>
            <Button  leftIcon={<LuPlusSquare fontSize={20} />}>
             
            </Button>
          </RouterLink>
          <Button  onClick={toggleColorMode}>
          {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
             </Button>
        </HStack>

</Flex>

      </Container>

    );
  };
  
  export default Navbar;