import {Action} from '@ngrx/store';
import {Profile} from '../types/profile';

export enum ProfileActionTypes {
    Load        = '[Profile] Load',
    LoadSuccess = '[Profile] LoadSuccess',
    Initialize  = '[Profile] Initialize'
}

export class LoadProfile implements Action {
    readonly type: string = ProfileActionTypes.Load;
}

export class LoadProfileSuccess implements Action {
    readonly type: string = ProfileActionTypes.LoadSuccess;
    constructor(public profile: Profile) {}
}

export class InitializeProfile implements Action {
    readonly type: string = ProfileActionTypes.Initialize;
}

export type ProfileAction = LoadProfile | LoadProfileSuccess | InitializeProfile;

