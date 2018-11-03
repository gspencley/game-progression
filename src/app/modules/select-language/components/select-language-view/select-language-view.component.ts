import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Language } from '../../../languages/types/language/language.interface';
import { Profile } from '../../../profile/types/profile/profile.interface';

@Component({
  selector: 'ks-select-language-view',
  templateUrl: './select-language-view.component.html',
  styleUrls: ['./select-language-view.styles.scss']
})
export class SelectLanguageViewComponent {
  @Input()
  public profile: Profile;

  @Input()
  public languages: Language[];

  @Output()
  public switchLanguage = new EventEmitter<number>();

  public isSelected(languageId: number) {
    return this.profile.language !== null && this.profile.language.id === languageId;
  }

  public change(languageId: number) {
    this.switchLanguage.emit(languageId);
  }

  public notLastItem(index) {
    return index < this.languages.length - 1;
  }
}
