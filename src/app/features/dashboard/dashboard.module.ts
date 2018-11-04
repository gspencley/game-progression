import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { UiModule } from '../../modules/ui/ui.module';

import { DashboardViewComponent } from './components';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardService } from './components/services/dashboard.service';
import { DashboardRoutesModule } from './dashboard-routes.module';
import { HoursToDaysPipe } from './pipes/hours-to-days/hours-to-days.pipe';

@NgModule({
  declarations: [DashboardComponent, DashboardViewComponent, HoursToDaysPipe],
  imports: [
    DashboardRoutesModule,
    TranslateModule.forChild(),
    UiModule,
    CommonModule
  ],
  providers: [DashboardService]
})
export class DashboardModule {}
