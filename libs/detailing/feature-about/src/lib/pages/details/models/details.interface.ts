export interface IDetails {
  details?: string;
  id: number;
  image?: {
    jpg: string;
    webp?: string;
  };
  location?: string;
  map?: {
    marker: google.maps.LatLng;
  };
  name: string;
  role?: string;
}
