import { chakra, Box, Flex, useColorModeValue, Link } from '@chakra-ui/react';

import { Link as ReachLink } from 'react-router-dom';

const PostItem = ({
  title,
  body,
  id,
}: {
  title: string;
  body: string;
  id: number;
}) => {
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue('white', 'gray.800')}
        w="100%"
      >
        <Box mt={2}>
          <Link
            as={ReachLink}
            to={`/post/${id}`}
            fontSize="2xl"
            color={useColorModeValue('gray.700', 'white')}
            fontWeight="700"
            _hover={{
              color: useColorModeValue('gray.600', 'gray.200'),
              textDecor: 'underline',
            }}
          >
            {title}
          </Link>
          <chakra.p mt={2} color={useColorModeValue('gray.600', 'gray.300')}>
            {body.substring(0, 20)}...
          </chakra.p>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Link
            as={ReachLink}
            to={`/post/${id}`}
            color={useColorModeValue('brand.600', 'brand.400')}
            _hover={{ textDecor: 'underline' }}
          >
            Read more
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default PostItem;
