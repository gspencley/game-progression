import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    children: [
      {path: 'your-profile', loadChildren: './modules/your-profile/your-profile.module#YourProfileModule'},
      {path: 'games', loadChildren: './modules/games/games.module#GamesModule'},
      {path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {
}
