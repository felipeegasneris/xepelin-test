import { PostType } from '@xepelin-test/core';
import axios from 'axios';
import { PaginatedPostsType } from '../domain/Post';
import { getPaginatedPostsUrl } from '../utils/utils';

export async function getPaginated(page: number): Promise<PaginatedPostsType> {
  const res = await axios.get(getPaginatedPostsUrl(page));
  const data = res.data;
  const nextId = data.length > 0 ? page + 1 : undefined;
  const result = {
    data,
    nextId,
  };
  return result;
}
