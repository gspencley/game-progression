import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LanguageCode } from '../../modules/languages/types/language/language-code.enum';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'ks-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private appStore: AppStore
  ) {
  }

  public ngOnInit(): void {
    this.translate.setDefaultLang(LanguageCode.EN);
    this.appStore.initialize();
  }
}
