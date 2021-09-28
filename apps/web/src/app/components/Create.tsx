import {
  chakra,
  Box,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import { usePostService } from '@xepelin-test/core';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

export default function Create() {
  const { createPost } = usePostService();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const mutation = useMutation((values: { title: string; body: string }) =>
    createPost(values)
  );

  function onSubmit(values: { title: string; body: string }) {
    mutation.mutate(values);
  }

  return (
    <Box bg={useColorModeValue('gray.50', 'inherit')} p={10}>
      <Box mt={[10, 0]}>
        <SimpleGrid
          display={{ base: 'initial', md: 'grid' }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                Create new Post
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                You can create a new entry here
              </Text>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form
              onSubmit={handleSubmit(onSubmit)}
              shadow="base"
              rounded={[null, 'md']}
              overflow={{ sm: 'hidden' }}
            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg={useColorModeValue('white', 'gray.700')}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl
                    as={GridItem}
                    colSpan={[6, 6]}
                    isInvalid={errors.title}
                  >
                    <FormLabel
                      htmlFor="title"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Post title
                    </FormLabel>
                    <Input
                      id="title"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register('title', {
                        required: 'This is required',
                      })}
                    />
                    <FormErrorMessage>
                      {errors.title && errors.title.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    as={GridItem}
                    colSpan={[6, 6]}
                    isInvalid={errors.body}
                  >
                    <FormLabel
                      htmlFor="body"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Post body
                    </FormLabel>
                    <Textarea
                      id="body"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register('body', {
                        required: 'This is required',
                      })}
                    />
                    <FormErrorMessage>
                      {errors.body && errors.body.message}
                    </FormErrorMessage>
                  </FormControl>
                </SimpleGrid>
              </Stack>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue('gray.50', 'gray.900')}
                textAlign="right"
              >
                <Button
                  mt={4}
                  fontWeight="md"
                  colorScheme="teal"
                  isLoading={mutation.isLoading}
                  type="submit"
                >
                  Save
                </Button>
                <Box p={4} mt={4} textAlign="center">
                  {mutation.data && (
                    <Box>
                      <chakra.p>Data saved!</chakra.p>
                      <chakra.p>{JSON.stringify(mutation.data)}</chakra.p>
                    </Box>
                  )}
                </Box>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
