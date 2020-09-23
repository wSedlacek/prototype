import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { INotice } from '@prototype/briefing/domain';
import { EMPTY, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'briefing-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnInit {
  constructor() {}

  @Input()
  public readonly headlines: Observable<INotice[]> = EMPTY;

  public readonly options = {
    autoplay: true,
    delay: 10 * 1000,
    loop: true,
  };

  @Output()
  public readonly selected = new EventEmitter<INotice>();

  public ngOnInit(): void {}

  public async selectHeadline(activeIndex: Promise<number>): Promise<void> {
    const index = (await activeIndex) - 1;

    const headline = await this.headlines
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

    this.selected.emit(headline);
  }
}
