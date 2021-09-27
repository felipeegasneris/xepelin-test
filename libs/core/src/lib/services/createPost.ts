import { PostType } from '@xepelin-test/core';
import axios from 'axios';
import { createPostUrl, random } from '../utils/utils';

export async function createPost(data: {
  title: string;
  body: string;
}): Promise<PostType> {
  const res = await axios.post(createPostUrl(), {
    ...data,
    userId: random(100, 1000),
  });
  return res.data;
}
