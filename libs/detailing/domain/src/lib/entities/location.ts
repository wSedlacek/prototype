export interface ILocation {
  details?: string;
  id: number;
  image?: {
    jpg: string;
    webp?: string;
  };
  location: string;
  name: string;
}
