const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export function getPaginatedPostsUrl(page: number): string {
  return `${API_URL}?_page=${page}&_limit=5&_sort=id&_order=desc`;
}

export function getPostUrl(id: number): string {
  return `${API_URL}/${id}`;
}

export function createPostUrl() {
  return `${API_URL}`;
}

export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;
