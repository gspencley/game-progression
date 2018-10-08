import {NgModule} from '@angular/core';

import {GamesComponent} from './components/games/games.component';
import {RouterModule} from '@angular/router';

const routes = [
    { path: '', component: GamesComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [GamesComponent],
    providers: [],
})
export class GamesModule {}
