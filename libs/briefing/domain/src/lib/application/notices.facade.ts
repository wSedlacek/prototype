import { Injectable, OnDestroy } from '@angular/core';
import { Subscriptions } from '@prototype/shared/util-subscriptions';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, takeWhile, timeoutWith } from 'rxjs/operators';

import { INotice } from '../entities/notice';
import { NoticeDataService } from '../infrastructure/notice.data.service';

@Injectable({ providedIn: 'root' })
export class NoticesFacade implements OnDestroy {
  constructor(private readonly noticeDataService: NoticeDataService) {}

  private readonly allLoaded = new BehaviorSubject<boolean>(false);
  private readonly noticeListSubject = new BehaviorSubject<INotice[]>([]);

  private readonly subs = new Subscriptions();
  public readonly noticeList$ = this.noticeListSubject.asObservable();

  public findNotice(id: string | number): Observable<INotice | undefined> {
    this.load();

    return this.noticeListSubject.pipe(
      map((people) => people.find((person) => person.id === id)),
      takeWhile((person) => !person, true),
      timeoutWith(400, of(undefined))
    );
  }

  public load(): void {
    if (this.allLoaded.getValue()) return;

    this.subs.sink = this.noticeDataService.load().subscribe(
      (articleList) => {
        this.noticeListSubject.next(articleList);
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
