import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ks-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnChanges {
  @Input()
  public timeRemaining: string;

  @Input()
  public numberOfFinishedGames: number;

  @Input()
  public numberOfUnFinishedGames: number;

  @Input()
  public totalNumberOfGames: number;

  public percentOfFinished: number;
  public percentOfUnFinished: number;

  constructor(public translate: TranslateService) {}

  public ngOnChanges(changes: SimpleChanges): void {
    this.percentOfFinished = this.numberOfFinishedGames / this.totalNumberOfGames;
    this.percentOfUnFinished = this.numberOfUnFinishedGames / this.totalNumberOfGames;
  }
}
