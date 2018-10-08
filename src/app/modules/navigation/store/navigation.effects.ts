import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Navigate, NavigationActionTypes} from './navigation.actions';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class NavigationEffects {
    constructor(private actions: Actions, private router: Router) {
    }

    @Effect({dispatch: false})
    navigate = this.actions.pipe(
        ofType(NavigationActionTypes.Navigate),
        map((action: Navigate) => action.route),
        tap((route: string) => { this.router.navigate([ route ]); })
    );
}
