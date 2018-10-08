import {NgModule} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {TranslateModule} from '@ngx-translate/core';
import {ProfileNavModule} from './modules/profile-nav/profile-nav.module';

@NgModule({
    imports: [
        TranslateModule.forChild(),
        ProfileNavModule
    ],

    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ]
})
export class HeaderModule {}
