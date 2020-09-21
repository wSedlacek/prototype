import { Injectable, OnDestroy } from '@angular/core';
import { Subscriptions } from '@prototype/shared/util-subscriptions';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { IArticle } from '../entities/article';
import { ArticleDataService } from '../infrastructure/article.data.service';

@Injectable({ providedIn: 'root' })
export class NewsFacade implements OnDestroy {
  constructor(private readonly articleDataService: ArticleDataService) {}
  private readonly articleListSubject = new BehaviorSubject<IArticle[]>([]);

  private readonly subs = new Subscriptions();
  public readonly articleList$ = this.articleListSubject.asObservable();
  public readonly headlines$ = this.articleListSubject.pipe(
    map((articles) => articles.filter(({ isHeadline }) => isHeadline))
  );
  public readonly stories$ = this.articleListSubject.pipe(
    map((articles) => articles.filter(({ isHeadline }) => !isHeadline))
  );

  public load(): void {
    this.subs.sink = this.articleDataService.load().subscribe(
      (articleList) => {
        this.articleListSubject.next(articleList);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
