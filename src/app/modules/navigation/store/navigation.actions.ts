import {Action} from '@ngrx/store';

export enum NavigationActionTypes {
    Navigate            = '[Navigation] Navigate',
}

export class Navigate implements Action {
    readonly type: string = NavigationActionTypes.Navigate;
    constructor(public route: string) {}
}
