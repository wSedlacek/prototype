import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { INotice, NoticesFacade } from '@prototype/briefing/domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticeResolver implements Resolve<INotice | undefined> {
  constructor(private readonly facade: NoticesFacade) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<INotice | undefined> {
    return this.facade.findNotice(Number(route.params.id));
  }
}
