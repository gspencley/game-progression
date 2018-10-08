import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutesModule } from './dashboard-routes.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [DashboardRoutesModule]
})
export class DashboardModule {
}
