import { PostType } from '../domain/Post';
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
