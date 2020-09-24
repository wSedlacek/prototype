import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AboutFacade, ILocation } from '@prototype/detailing/domain';
import { iif, Observable, of, Subject } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { ILocationData } from '../../../models/location-data.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationResolver implements Resolve<ILocationData | undefined> {
  constructor(private readonly facade: AboutFacade) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<ILocationData | undefined> {
    return this.facade.findLocation(Number(route.params.id)).pipe(
      switchMap((location) => {
        const marker$ = new Subject<google.maps.LatLng>();
        const googleMaps = new google.maps.Map(document.createElement('div'));

        const places = new google.maps.places.PlacesService(googleMaps);
        if (location)
          places.findPlaceFromQuery(
            { fields: ['name', 'geometry'], query: location?.location },
            ([result], status) => {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                const center = result.geometry?.location;

                marker$.next(center);
              }
            }
          );

        return iif(
          () => !!location,
          marker$.pipe(
            take(1),
            map((marker) => ({
              ...(location as ILocation),
              map: {
                marker,
              },
            }))
          ),
          of(location as undefined)
        );
      })
    );
  }
}
