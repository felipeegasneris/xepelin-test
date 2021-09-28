import React from 'react';
import { chakra, Box, Image, Flex, useColorModeValue } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { usePostService } from '@xepelin-test/core';

export default function View(props: any) {
  const id = props.match.params.id;
  const { getPost } = usePostService();
  const { data } = useQuery(['getPost', id], () => getPost(id));
  const { title, body, userId } = data ?? {};
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
        rounded="lg"
        shadow="md"
        bg={useColorModeValue('white', 'gray.800')}
        maxW="2xl"
      >
        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color={useColorModeValue('brand.600', 'brand.400')}
            >
              Id: {id}
            </chakra.span>
            <chakra.p
              display="block"
              color={useColorModeValue('gray.800', 'white')}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
            >
              {title}
            </chakra.p>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              {body}
            </chakra.p>
          </Box>

          <Box mt={4}>
            <Flex alignItems="center">
              <Flex alignItems="center">
                <Image
                  h={10}
                  fit="cover"
                  rounded="full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
              </Flex>
              <chakra.span
                mx={1}
                fontSize="sm"
                color={useColorModeValue('gray.600', 'gray.300')}
              >
                user id: {userId}
              </chakra.span>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
