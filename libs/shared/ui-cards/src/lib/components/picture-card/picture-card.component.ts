import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { ICard } from '../../models/card.interface';

@Component({
  selector: 'shared-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PictureCardComponent implements OnInit {
  constructor() {}

  @Output()
  private readonly selected = new EventEmitter<ICard>();

  @Input()
  public readonly details?: ICard;

  public ngOnInit(): void {}

  public selectDetail(detail: ICard): void {
    this.selected.emit(detail);
  }

  public get selectable(): boolean {
    return this.selected.observers.length > 0;
  }
}
