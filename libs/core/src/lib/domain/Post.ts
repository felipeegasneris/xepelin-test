export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PaginatedPostsType = {
  data: PostType[];
  nextId: number | undefined;
};
