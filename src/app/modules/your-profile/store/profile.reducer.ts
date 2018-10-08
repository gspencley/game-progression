import {ProfileState} from '../types/profile-state';
import {LoadProfileSuccess, ProfileAction, ProfileActionTypes} from './profile.actions';

const initialState: ProfileState = {
    profile: {
        id: 0,
        firstName: '',
        lastName: '',
        image: '',
        languageId: 1,
        averageNumberOfHoursPerDay: 0
    }
};

export const profileReducer = (state: ProfileState=initialState, action: ProfileAction) => {
    switch(action.type) {
        case ProfileActionTypes.LoadSuccess:
            console.log('Load Success');
            const loadSuccessAction = action as LoadProfileSuccess;
            return { ...state, profile: loadSuccessAction.profile};
        default:
            return state;
    }
};
