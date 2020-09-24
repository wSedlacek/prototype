export interface IBanner {
  date?: string;
  description: string;
  id: number;
  image?: {
    jpg: string;
    webp?: string;
  };
  name: string;
}
