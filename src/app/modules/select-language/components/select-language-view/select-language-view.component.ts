import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Language } from '../../types/language.interface';

@Component({
  selector: 'ks-select-language-view',
  templateUrl: './select-language-view.component.html',
  styleUrls: ['./select-language-view.styles.scss']
})
export class SelectLanguageViewComponent {
  @Input()
  languageId: number;

  @Input()
  languages: Language[];

  @Output()
  switchLanguage = new EventEmitter<number>();

  isSelected(languageId: number) {
    return languageId === this.languageId;
  }

  change(languageId: number) {
    this.switchLanguage.emit(languageId);
  }

  notLastItem(index) {
    return index < this.languages.length - 1;
  }
}
