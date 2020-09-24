export interface ICard {
  date?: string;
  description?: string;
  id: number;
  image?: {
    jpg: string;
    webp?: string;
  };
  location?: string;
  name?: string;
  role?: string;
}
