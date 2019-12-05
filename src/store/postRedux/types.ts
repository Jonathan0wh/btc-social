export interface PostState extends Array<Post> {}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
