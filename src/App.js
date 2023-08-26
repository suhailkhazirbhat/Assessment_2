import React from 'react';
import { ChakraProvider, CSSReset, Container, Heading } from '@chakra-ui/react';
import UserForm from './UserForm';

function App() {
  return (
    <ChakraProvider>
      <Container maxW="xl" centerContent mt="8">
        <Heading as="h1" size="xl" mb="4">
          GitHub User Card App
        </Heading>
        <UserForm />
      </Container>
      <CSSReset />
    </ChakraProvider>
  );
}

export default App;
