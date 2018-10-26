import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '../../modules/select-language/types/language-code.enum';

@Component({
  selector: 'ks-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang(LanguageCode.EN);
  }
}

