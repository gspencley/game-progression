import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileNavViewComponent} from './components/profile-nav-view/profile-nav-view.component';
import {YourProfileModule} from '../../../your-profile/your-profile.module';
import {ProfileNavComponent} from './components/profile-nav/profile-nav.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        YourProfileModule
    ],
    declarations: [
        ProfileNavComponent,
        ProfileNavViewComponent
    ],
    exports:  [ ProfileNavComponent ]
})
export class ProfileNavModule {}
