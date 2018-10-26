import { NgModule } from '@angular/core';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { CommonModule } from '@angular/common';
import { ProfileEditRoutesModule } from './profile-edit-routes.module';
import { UiModule } from '../../../ui/ui.module';
import { ProfileEditMenuComponent } from './components/profile-edit-menu/profile-edit-menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileEditViewComponent } from './components/profile-edit-view/profile-edit-view.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    ReactiveFormsModule,
    ProfileEditRoutesModule,
    CommonModule,
    UiModule,
    TranslateModule.forChild()
  ],

  declarations: [
    ProfileEditComponent,
    ProfileEditViewComponent,
    ProfileEditMenuComponent
  ]
})
export class ProfileEditModule {
}
