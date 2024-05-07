import { Box, Container, Flex, IconButton, Image, Input, InputGroup, InputRightElement, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaUserCircle, FaHeart, FaShoppingCart, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const featuredShoes = [
    { id: 1, name: "Air Jordan 1 Retro High", image: "https://images.unsplash.com/photo-1597843994436-120c8d91cae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBaXIlMjBKb3JkYW4lMjAxJTIwUmV0cm8lMjBIaWdofGVufDB8fHx8MTcxNTA4NjIyMXww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 2, name: "Yeezy Boost 350 V2", image: "https://images.unsplash.com/photo-1596520158107-29cf199a6064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxZZWV6eSUyMEJvb3N0JTIwMzUwJTIwVjJ8ZW58MHx8fHwxNzE1MDg2MjIxfDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 3, name: "Nike Dunk Low", image: "https://images.unsplash.com/photo-1615290642924-8e6883b28a5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxOaWtlJTIwRHVuayUyMExvd3xlbnwwfHx8fDE3MTUwODYyMjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  ];

  const recommendedProducts = [
    { id: 1, name: "Product 1", image: "https://images.unsplash.com/photo-1603787081207-362bcef7c144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbmVha2VyfGVufDB8fHx8MTcxNTA4NjIyMnww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 2, name: "Product 2", image: "https://images.unsplash.com/photo-1618677831708-0e7fda3148b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxzbmVha2VyfGVufDB8fHx8MTcxNTA4NjIyMnww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 3, name: "Product 3", image: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxzbmVha2VyfGVufDB8fHx8MTcxNTA4NjIyMnww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 4, name: "Product 4", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw0fHxzbmVha2VyfGVufDB8fHx8MTcxNTA4NjIyMnww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 5, name: "Product 5", image: "https://images.unsplash.com/photo-1571601035754-5c927f2d7edc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw1fHxzbmVha2VyfGVufDB8fHx8MTcxNTA4NjIyMnww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 6, name: "Product 6", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw2fHxzbmVha2VyfGVufDB8fHx8MTcxNTA4NjIyMnww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 7, name: "Product 7", image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw3fHxzbmVha2VyfGVufDB8fHx8MTcxNTA4NjIyMnww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 8, name: "Product 8", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw4fHxzbmVha2VyfGVufDB8fHx8MTcxNTA4NjIyMnww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 9, name: "Product 9", image: "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw5fHxzbmVha2VyfGVufDB8fHx8MTcxNTA4NjIyMnww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 10, name: "Product 10", image: "https://images.unsplash.com/photo-1603787081151-cbebeef20092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxMHx8c25lYWtlcnxlbnwwfHx8fDE3MTUwODYyMjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  ];

  const handleSliderChange = (direction) => {
    if (direction === "next") {
      setSliderIndex((prevIndex) => (prevIndex + 1) % featuredShoes.length);
    } else {
      setSliderIndex((prevIndex) => (prevIndex + featuredShoes.length - 1) % featuredShoes.length);
    }
  };

  return (
    <Container maxW="container.xl">
      <Flex justifyContent="space-between" alignItems="center" py={4}>
        <Text fontSize="2xl" fontWeight="bold">
          naha
        </Text>
        <InputGroup w="30%">
          <Input placeholder="Search for shoes" />
          <InputRightElement children={<IconButton aria-label="Search" icon={<FaSearch />} />} />
        </InputGroup>
        <Flex>
          <IconButton aria-label="Account" icon={<FaUserCircle />} mx={2} />
          <IconButton aria-label="Wishlist" icon={<FaHeart />} mx={2} />
          <IconButton aria-label="Cart" icon={<FaShoppingCart />} mx={2} />
        </Flex>
      </Flex>

      <Flex my={8} alignItems="center" justifyContent="center">
        <IconButton aria-label="Previous" icon={<FaArrowLeft />} onClick={() => handleSliderChange("prev")} />
        <Image src={featuredShoes[sliderIndex].image} boxSize="300px" mx={8} />
        <IconButton aria-label="Next" icon={<FaArrowRight />} onClick={() => handleSliderChange("next")} />
      </Flex>

      <VStack spacing={4} align="stretch" my={8}>
        <Text fontSize="xl" fontWeight="bold">
          Explore
        </Text>
        <Flex>
          <Text cursor="pointer" p={2} _hover={{ bg: "gray.200" }}>
            Fast Shipment
          </Text>
          <Text cursor="pointer" p={2} _hover={{ bg: "gray.200" }}>
            New Arrivals
          </Text>
          <Text cursor="pointer" p={2} _hover={{ bg: "gray.200" }}>
            Main Brands
          </Text>
        </Flex>
      </VStack>

      <VStack spacing={4} align="stretch" my={8}>
        <Text fontSize="xl" fontWeight="bold">
          Recommended for You
        </Text>
        <SimpleGrid columns={5} spacing={4}>
          {recommendedProducts.map((product) => (
            <Box key={product.id} boxShadow="md" p={4} borderRadius="md">
              <Image src={product.image} boxSize="150px" />
              <Text mt={2}>{product.name}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
