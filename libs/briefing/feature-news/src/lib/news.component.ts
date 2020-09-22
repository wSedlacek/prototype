import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NewsFacade } from '@prototype/briefing/domain';
import { map, take } from 'rxjs/operators';

@Component({
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor(
    private readonly newsFacade: NewsFacade,
    private readonly nav: NavController
  ) {}

  public readonly headlineOptions = {
    autoplay: true,
    delay: 10 * 1000,
    loop: true,
  };

  public readonly headlines$ = this.newsFacade.headlines$;
  public readonly stories$ = this.newsFacade.stories$;

  public load(): void {
    this.newsFacade.load();
  }

  public ngOnInit(): void {
    this.load();
  }

  public openArticle(id: number): void {
    this.nav.navigateForward(`/news/articles/${id}`);
  }

  public async openHeadline(activeIndex: Promise<number>): Promise<void> {
    const index = (await activeIndex) - 1;

    const headline = await this.headlines$
      .pipe(
        map(async (headlines) => {
          const normalizedIndex = (() => {
            if (index >= headlines.length) return 0;
            if (index < 0) return headlines.length - 1;

            return index;
          })();

          return headlines[normalizedIndex];
        }),
        take(1)
      )
      .toPromise();

    this.openArticle(headline.id);
  }
}
