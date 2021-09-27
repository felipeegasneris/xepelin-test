import { Box, Button, Stack, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <VStack spacing={4}>
      <Button>
        <Link to="/new">Crear post</Link>
      </Button>
      <Button>
        <Link to="/">Listar posts</Link>
      </Button>
    </VStack>
  );
}
