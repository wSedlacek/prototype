import { Injectable, OnDestroy } from '@angular/core';
import { Subscriptions } from '@prototype/shared/util-subscriptions';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { INotice } from '../entities/notice';
import { NoticeDataService } from '../infrastructure/notice.data.service';

@Injectable({ providedIn: 'root' })
export class NoticesFacade implements OnDestroy {
  constructor(private readonly noticeDataService: NoticeDataService) {}
  private readonly noticeListSubject = new BehaviorSubject<INotice[]>([]);

  private readonly subs = new Subscriptions();
  public readonly noticeList$ = this.noticeListSubject.asObservable();

  public load(): void {
    this.subs.sink = this.noticeDataService.load().subscribe(
      (articleList) => {
        this.noticeListSubject.next(articleList);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  public query(id: string | number): Observable<INotice | undefined> {
    return this.noticeListSubject.pipe(
      map((notices) => notices.find((article) => article.id === Number(id)))
    );
  }
}
