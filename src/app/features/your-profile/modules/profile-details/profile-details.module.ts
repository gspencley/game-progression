import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { UiModule } from '../../../../modules/ui/ui.module';

import { ProfileDetailsMenuComponent } from './components/profile-details-menu/profile-details-menu.component';
import { ProfileDetailsViewComponent } from './components/profile-details-view/profile-details-view.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileDetailsRoutesModule } from './profile-details-routes.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    ProfileDetailsRoutesModule,
    TranslateModule.forChild()
  ],
  declarations: [ProfileDetailsComponent, ProfileDetailsViewComponent, ProfileDetailsMenuComponent],
  exports: [ProfileDetailsComponent]
})
export class ProfileDetailsModule {}
