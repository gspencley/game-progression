import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Boolean } from '../../../../types/boolean';

@Component({
  selector: 'ks-row',
  templateUrl: 'row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnChanges {
  @Input()
  public wrap: boolean;

  @Input('space-between')
  public spaceBetween: boolean;

  public ngOnChanges(changes: SimpleChanges): void {
    this.wrap = Boolean(this.wrap);
    this.spaceBetween = Boolean(this.spaceBetween);
  }
}
