export interface ISystemState {
    name: string
}

export const UPDATE_NAME = "UPDATE_NAME";

export interface IUpdateNameAction {
    type: typeof UPDATE_NAME;
    payload: ISystemState;
}

export type SystemActionTypes = IUpdateNameAction;