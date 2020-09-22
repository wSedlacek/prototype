import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsFacade } from '@prototype/briefing/domain';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly newsFacade: NewsFacade
  ) {}

  private readonly id$ = this.route.params.pipe(map(({ id }) => id as string));
  public readonly article$ = this.id$.pipe(
    tap(() => this.newsFacade.load()),
    switchMap((id) => this.newsFacade.query(id))
  );

  public ngOnInit(): void {}
}
