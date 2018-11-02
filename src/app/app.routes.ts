import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    children: [
      {
        path: 'your-profile',
        loadChildren: './features/your-profile/your-profile.module#YourProfileModule'
      },
      { path: 'games', loadChildren: './features/games/games.module#GamesModule' },
      { path: 'dashboard', loadChildren: './features/dashboard/dashboard.module#DashboardModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}
