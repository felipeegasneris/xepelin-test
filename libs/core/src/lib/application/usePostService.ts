import { getPaginated } from '../services/getPosts';
import { createPost } from '../services/createPost';

export function usePostService() {
  return {
    getPaginated,
    createPost,
  };
}
