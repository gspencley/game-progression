import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { UiModule } from '../ui/ui.module';
import { YourProfileModule } from '../../features/your-profile/your-profile.module';

import { ProfileNavViewComponent } from './components/profile-nav-view/profile-nav-view.component';
import { ProfileNavComponent } from './components/profile-nav/profile-nav.component';

@NgModule({
  imports: [CommonModule, RouterModule, YourProfileModule, UiModule, TranslateModule.forChild()],
  declarations: [ProfileNavComponent, ProfileNavViewComponent],
  exports: [ProfileNavComponent]
})
export class ProfileNavModule {}
