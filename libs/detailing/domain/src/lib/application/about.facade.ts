import { Injectable, OnDestroy } from '@angular/core';
import { Subscriptions } from '@prototype/shared/util-subscriptions';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, takeWhile, timeoutWith } from 'rxjs/operators';

import { IHeadline } from '../entities/headline';
import { ILocation } from '../entities/location';
import { IPerson } from '../entities/person';
import { HeadlineDataService } from '../infrastructure/headline.data.service';
import { LocationDataService } from '../infrastructure/location.data.service';
import { PersonDataService } from '../infrastructure/person.data.service';

@Injectable({ providedIn: 'root' })
export class AboutFacade implements OnDestroy {
  constructor(
    private readonly headlinesDataService: HeadlineDataService,
    private readonly locationDataService: LocationDataService,
    private readonly personDataService: PersonDataService
  ) {}

  private readonly allLoaded = new BehaviorSubject<boolean>(false);

  private readonly headlineListSubject = new BehaviorSubject<IHeadline[]>([]);
  private readonly locationListSubject = new BehaviorSubject<ILocation[]>([]);
  private readonly peopleListSubject = new BehaviorSubject<IPerson[]>([]);
  private readonly subs = new Subscriptions();

  public readonly headlineList$ = this.headlineListSubject.asObservable();
  public readonly locationList$ = this.locationListSubject.asObservable();
  public readonly personList$ = this.peopleListSubject.asObservable();

  public findLocation(id: number): Observable<ILocation | undefined> {
    this.load();

    return this.locationListSubject.pipe(
      map((locations) => locations.find((location) => location.id === id)),
      takeWhile((location) => !location, true),
      timeoutWith(400, of(undefined))
    );
  }

  public findPerson(id: number): Observable<IPerson | undefined> {
    this.load();

    return this.peopleListSubject.pipe(
      map((people) => people.find((person) => person.id === id)),
      takeWhile((person) => !person, true),
      timeoutWith(400, of(undefined))
    );
  }

  public load(): void {
    if (this.allLoaded.getValue()) return;

    this.subs.sink = this.headlinesDataService.load().subscribe(
      (headlinesList) => {
        this.headlineListSubject.next(headlinesList);
      },
      (err) => {
        console.error('err', err);
      }
    );

    this.subs.sink = this.personDataService.load().subscribe(
      (personList) => {
        this.peopleListSubject.next(personList);
      },
      (err) => {
        console.error('err', err);
      }
    );

    this.subs.sink = this.locationDataService.load().subscribe(
      (locationList) => {
        this.locationListSubject.next(locationList);
      },
      (err) => {
        console.error('err', err);
      }
    );

    this.allLoaded.next(true);
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
