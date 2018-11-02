import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ProfileModule } from '../../modules/profile/profile.module';

import { YourProfileComponent } from './components/your-profile/your-profile.component';
import { ProfileDetailsModule } from './modules/profile-details/profile-details.module';
import { YourProfileRoutesModule } from './your-profile-routes.module';

@NgModule({
  imports: [
    YourProfileRoutesModule,

    TranslateModule.forChild(),
    CommonModule,

    ProfileModule,
    ProfileDetailsModule
  ],
  declarations: [YourProfileComponent]
})
export class YourProfileModule {}
