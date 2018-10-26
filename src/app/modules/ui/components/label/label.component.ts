import { Component, Input } from '@angular/core';

@Component({
  selector: 'ks-label',
  templateUrl: 'label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {
  @Input()
  label: string;
}