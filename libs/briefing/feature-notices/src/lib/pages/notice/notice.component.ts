import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticesFacade } from '@prototype/briefing/domain';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
})
export class NoticeComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly newsFacade: NoticesFacade
  ) {}

  private readonly id$ = this.route.params.pipe(map(({ id }) => id as string));
  public readonly article$ = this.id$.pipe(
    tap(() => this.newsFacade.load()),
    switchMap((id) => this.newsFacade.query(id))
  );

  public ngOnInit(): void {}
}
