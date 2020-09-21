export interface IArticle {
  description: string;
  headline?: {
    image?: string;
  };
  id: number;
  isHeadline?: boolean;
  name: string;
}
