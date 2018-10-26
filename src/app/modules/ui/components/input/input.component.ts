import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ks-input',
  templateUrl: 'input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input()
  label: string;

  @Input()
  control: FormControl;
}
