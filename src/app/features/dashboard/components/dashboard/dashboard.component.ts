import { Component } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'ks-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(public dashboardService: DashboardService) {}
}
