import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { YourProfileComponent } from './components/your-profile/your-profile.component';

const routes = [
  {
    path: '',
    children: [
      {path: '', component: YourProfileComponent},
      {path: 'details', loadChildren: './modules/profile-details/profile-details.module#ProfileDetailsModule'},
      {path: 'edit', loadChildren: './modules/profile-edit/profile-edit.module#ProfileEditModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourProfileRoutesModule {
}
