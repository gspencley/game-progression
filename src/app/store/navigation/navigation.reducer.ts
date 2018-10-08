import { AppAction, AppActionTypes } from './navigation.actions';
import { NavigationState } from '../../types/navigation/navigation-state.interface';

const initialState = {
  activeRoute: '/'
};

export const navigationReducer = (state: NavigationState = initialState, action: AppAction) => {
  switch(action.type) {
    case AppActionTypes.NAVIGATE:
      return {...state, activeRoute: action.route};
    default:
      return state;
  }
};
