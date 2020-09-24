export interface IPerson {
  details?: string;
  id: number;
  image?: {
    jpg: string;
    webp?: string;
  };
  name: string;
  role: string;
}
