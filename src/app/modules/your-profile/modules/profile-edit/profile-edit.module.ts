import {NgModule} from '@angular/core';
import {ProfileEditComponent} from './components/profile-edit/profile-edit.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

const routes = [
    { path: '', component: ProfileEditComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],

    declarations: [ ProfileEditComponent ]
})
export class ProfileEditModule {}
