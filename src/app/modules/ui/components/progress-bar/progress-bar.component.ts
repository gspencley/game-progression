import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ks-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnChanges {
  @Input()
  public percent: number;

  @Input()
  public colorScheme: string;

  public fillWidth: string;

  public ngOnChanges(changes: SimpleChanges): void {
    this.fillWidth = `${(this.percent * 100).toFixed(2)}%`;
  }
}
