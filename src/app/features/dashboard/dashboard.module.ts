import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { UiModule } from '../../modules/ui/ui.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutesModule } from './dashboard-routes.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [DashboardRoutesModule, TranslateModule.forChild(), UiModule]
})
export class DashboardModule {}
