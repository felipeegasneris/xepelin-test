import { PostType, usePostService } from '@xepelin-test/core';
import { useForm } from 'react-hook-form';
import React from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  Box,
} from '@chakra-ui/react';
export default function Create() {
  const { createPost } = usePostService();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values: { title: string; body: string }) {
    return await createPost(values);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.title}>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input
          id="title"
          placeholder="title"
          {...register('title', {
            required: 'This is required',
          })}
        />
        <FormErrorMessage>
          {errors.title && errors.title.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.body}>
        <FormLabel htmlFor="body">Body</FormLabel>
        <Input
          id="body"
          placeholder="body"
          {...register('body', {
            required: 'This is required',
          })}
        />
        <FormErrorMessage>
          {errors.body && errors.body.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Create
      </Button>
    </form>
  );
}
