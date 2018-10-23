import { NgModule } from '@angular/core';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { CommonModule } from '@angular/common';
import { ProfileEditRoutesModule } from './profile-edit-routes.module';
import { UiModule } from '../../../ui/ui.module';
import { ProfileEditMenuComponent } from './components/profile-edit-menu/profile-edit-menu.component';


@NgModule({
  imports: [
    ProfileEditRoutesModule,
    CommonModule,
    UiModule
  ],

  declarations: [
    ProfileEditComponent,
    ProfileEditMenuComponent
  ]
})
export class ProfileEditModule {
}
