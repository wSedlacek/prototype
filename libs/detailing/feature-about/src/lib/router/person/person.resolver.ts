import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AboutFacade, IPerson } from '@prototype/detailing/domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonResolver implements Resolve<IPerson | undefined> {
  constructor(private readonly facade: AboutFacade) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<IPerson | undefined> {
    return this.facade.findPerson(Number(route.params.id));
  }
}
