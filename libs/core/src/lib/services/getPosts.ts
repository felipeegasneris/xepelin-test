import axios from 'axios';
import { PaginatedPostsType, PostType } from '../domain/Post';
import { getPaginatedPostsUrl, getPostUrl } from '../utils/utils';

export async function getPaginated(page: number): Promise<PaginatedPostsType> {
  const res = await axios.get(getPaginatedPostsUrl(page));
  const data = res.data;
  const nextId = data.length > 0 ? page + 1 : undefined;
  return {
    data,
    nextId,
  };
}

export async function getPost(id: number): Promise<PostType> {
  const res = await axios.get(getPostUrl(id));
  return res.data;
}
