import { Box, Container, Heading, Button,useColorModeValue, VStack, Input } from "@chakra-ui/react"
import { useToast } from '@chakra-ui/react'
import { useState } from "react"
import { useProductStore } from "../store/product"


const CreatePage = () => {
  const [newProduct , setNewProduct]=useState({
    name: "",
    price: "",
    image: "",
  })
  const toast = useToast();
const {createproduct}= useProductStore();
 const handleAddProduct = async() => {
  const {success,message}=  await  createproduct(newProduct)
if(!success){
  toast({
    title: "Error",
    description: message,
    status: "error",
    duration: 9000,
    isClosable: true,
  });
  return;  // Stop the function if there's an error. This prevents the user from submitting the form multiple times.
 }
 else{
  toast({
    title: "Success",
    description: "Product created successfully!",
    status: "success",
    duration: 9000,
    isClosable: true,
  })
  setNewProduct({
    name: "",
    price: "",
    image: "",
  }) ; // Reset the form fields after successful submission.
 }
};
 


  
 
  return (
    <Container maxW={"container.sm"}>
    <VStack spacing={8}>
<Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>

  Create New Product 
</Heading>
<Box w={"full"} bg={useColorModeValue("white","gray.800")}
p={6} rounded={"lg"} shadow={"md"}
>
<VStack spacing={4}>
  {/* mettre à jour dynamiquement le nom du produit dans l'état à chaque frappe de l'utilisateur. */}
  <Input placeholder="Product Name"
   name="name" value={newProduct.name} w={"full"}
    onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})}/>
     <Input
  placeholder="Product Price"
  name="price"
  value={newProduct.price}
  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
  w="full" // Chakra UI prop to set full width
/>
     <Input placeholder="Product URL"
   name="image" value={newProduct.image}
    onChange={(e)=>setNewProduct({...newProduct,image:e.target.value})}/>
<Button colorScheme="blue" onClick={(handleAddProduct)}  w={"full"}>
              Add Product 
            </Button>




</VStack>





</Box>

    </VStack>
    </Container>
  )
}

export default CreatePage
