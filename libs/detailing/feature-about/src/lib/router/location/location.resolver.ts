import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AboutFacade, ILocation } from '@prototype/detailing/domain';
import { iif, Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { ILocationData } from '../../../models/location-data.interface';
import { MapsService } from '../../services/maps.service';

@Injectable({
  providedIn: 'root',
})
export class LocationResolver implements Resolve<ILocationData | undefined> {
  constructor(
    private readonly facade: AboutFacade,
    private readonly maps: MapsService
  ) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<ILocationData | undefined> {
    return this.facade.findLocation(Number(route.params.id)).pipe(
      switchMap((data) =>
        iif(
          () => !!data,
          this.maps.query((data as ILocation).location).pipe(
            take(1),
            map((marker) => ({
              ...(data as ILocation),
              map: marker ? { marker } : undefined,
            }))
          ),
          of(data as undefined)
        )
      )
    );
  }
}
