import { NgModule } from '@angular/core';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UiModule } from '../../../ui/ui.module';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileDetailsMenuComponent } from './components/profile-details-menu/profile-details-menu.component';
import { ProfileDetailsViewComponent } from './components/profile-details-view/profile-details-view.component';

const routes = [
  {path: '', component: ProfileDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProfileDetailsComponent,
    ProfileDetailsViewComponent,
    ProfileDetailsMenuComponent
  ],
  exports: [ProfileDetailsComponent]
})
export class ProfileDetailsModule {
}
