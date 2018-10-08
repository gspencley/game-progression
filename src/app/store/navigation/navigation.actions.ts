import { Action } from "@ngrx/store";

export enum AppActionTypes {
  NAVIGATE = '[Navigation] Navigate',
}

export class Navigate implements Action {
  readonly type: string = AppActionTypes.NAVIGATE;
  constructor(public route: string) {}
}

export type AppAction = Navigate;
