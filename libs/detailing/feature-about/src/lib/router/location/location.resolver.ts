import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AboutFacade, ILocation } from '@prototype/detailing/domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationResolver implements Resolve<ILocation | undefined> {
  constructor(private readonly facade: AboutFacade) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<ILocation | undefined> {
    return this.facade.findLocation(Number(route.params.id));
  }
}
