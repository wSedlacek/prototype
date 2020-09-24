import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { AboutFacade } from '@prototype/detailing/domain';
import { iif, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LocationGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly facade: AboutFacade
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> {
    return this.facade
      .findLocation(Number(route.params.id))
      .pipe(
        switchMap((location) =>
          iif(
            () => !!location,
            of(true),
            of(this.router.createUrlTree(['../']))
          )
        )
      );
  }
}
