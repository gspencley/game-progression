import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ks-select',
  templateUrl: 'select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input()
  public label: string;

  @Input()
  public options: string[];

  @Input()
  public control: FormControl;
}
