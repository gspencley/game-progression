import {NgModule} from '@angular/core';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';

const routes = [
    { path: '', component: DashboardComponent }
];

@NgModule({
    declarations: [ DashboardComponent ],
    imports: [ RouterModule.forChild(routes) ]
})
export class DashboardModule {}
