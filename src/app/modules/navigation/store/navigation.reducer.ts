import {NavigationState} from '../types/navigation-state';
import {Navigate, NavigationActionTypes} from './navigation.actions';

const initialState: NavigationState = {
    activeRoute: '/'
};

export const navigationReducer = (state: NavigationState=initialState, action:Navigate): NavigationState => {
    switch(action.type) {
        case NavigationActionTypes.Navigate:
            return { ...state, activeRoute: action.route };
        default:
            return state;
    }
};
