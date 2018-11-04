import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ks-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input()
  public type: string;

  @Input()
  public message: string;

  public notDismissed = true;

  public dismiss() {
    this.notDismissed = false;
  }

  constructor(public translate: TranslateService) {}
}
