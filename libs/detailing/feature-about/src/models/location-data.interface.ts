import { ILocation } from '@prototype/detailing/domain';

export interface ILocationData extends ILocation {
  map?: {
    marker: google.maps.LatLng;
  };
}
