import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  mapTo,
  shareReplay,
  switchMap,
} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MapsService {
  constructor(private readonly http: HttpClient) {}

  private readonly apiLoaded$ = this.http
    .jsonp(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBpn9lEv7X269P3LDG9g_hhRbLr9fdoHmo&libraries=places',
      'callback'
    )
    .pipe(
      mapTo(true),
      catchError(() => of(false)),
      shareReplay(1)
    );

  private readonly maps$ = this.apiLoaded$.pipe(
    filter((loaded) => loaded),
    map(() => new google.maps.Map(document.createElement('div'))),
    shareReplay(1)
  );

  private readonly places$ = this.maps$.pipe(
    map((maps) => new google.maps.places.PlacesService(maps)),
    shareReplay(1)
  );

  public query(query: string): Observable<google.maps.LatLng | undefined> {
    return this.places$.pipe(
      switchMap(
        (places) =>
          new Observable<google.maps.LatLng | undefined>((observer) => {
            places.findPlaceFromQuery(
              { query, fields: ['name', 'geometry'] },
              ([result], status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                  const center = result.geometry?.location;

                  observer.next(center);
                } else {
                  observer.next();
                }
              }
            );
          })
      )
    );
  }
}
