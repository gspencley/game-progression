import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Language } from '../../../languages/types/language/language.interface';

@Component({
  selector: 'ks-select-language-view',
  templateUrl: './select-language-view.component.html',
  styleUrls: ['./select-language-view.styles.scss']
})
export class SelectLanguageViewComponent {
  @Input()
  public language: Language;

  @Input()
  public languages: Language[];

  @Output()
  public switchLanguage = new EventEmitter<number>();

  public isSelected(languageId: number) {
    return this.language !== null && languageId === this.language.id;
  }

  public change(languageId: number) {
    this.switchLanguage.emit(languageId);
  }

  public notLastItem(index) {
    return index < this.languages.length - 1;
  }
}
