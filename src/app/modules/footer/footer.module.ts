import {NgModule} from '@angular/core';
import {FooterComponent} from './components/footer/footer.component';
import {TranslateModule} from '@ngx-translate/core';
import {SelectLanguageModule} from '../select-language/select-language.module';

@NgModule({
    imports: [
        SelectLanguageModule,
        TranslateModule.forChild()
    ],

    declarations: [ FooterComponent ],
    exports: [ FooterComponent ]
})
export class FooterModule {}
