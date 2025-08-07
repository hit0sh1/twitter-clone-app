export type Post = {
  id: number;
  content: string;
  like: number;
  handle: string;
  image: string | null;
  createdAt: Date | null;
  avatarUrl: string | null;
  name: string;
}