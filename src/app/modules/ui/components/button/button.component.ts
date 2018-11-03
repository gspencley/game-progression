import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ks-button',
  templateUrl: 'button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges {
  @Input()
  public type: string;

  @Input()
  public disabled: boolean;

  public isAccept: boolean;

  public ngOnChanges(changes: SimpleChanges): void {
    this.isAccept = this.type === 'accept';
  }
}
