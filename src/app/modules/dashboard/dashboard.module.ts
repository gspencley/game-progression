import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutesModule } from './dashboard-routes.module';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutesModule,
    UiModule
  ]
})
export class DashboardModule {
}
