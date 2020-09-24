import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { NoticesFacade } from '@prototype/briefing/domain';
import { iif, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NoticeGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly facade: NoticesFacade
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> {
    return this.facade
      .findNotice(Number(route.params.id))
      .pipe(
        switchMap((notice) =>
          iif(() => !!notice, of(true), of(this.router.createUrlTree(['../'])))
        )
      );
  }
}
