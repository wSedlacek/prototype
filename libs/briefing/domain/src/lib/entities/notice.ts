export interface INotice {
  date?: string;
  description: string;
  id: number;
  image?: {
    jpg: string;
    webp?: string;
  };
  isHeadline?: boolean;
  name: string;
}
