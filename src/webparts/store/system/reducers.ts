import { IAction, actionTypes, gameTypes } from './actions';

export interface IApplicationState {
  checkers: number;
  chess: number;
  fish: number;
};

const initialState: IApplicationState = {
  checkers: 0,
  chess: 0,
  fish: 0
};

export default function(state: IApplicationState = initialState, action: IAction) {
  switch(action.type) {
    case actionTypes.vote:
      var newState: IApplicationState = {...state};

      switch(action.data.gameType) {
        case gameTypes.checkers:
          newState.checkers ++;
          break;
        case gameTypes.chess:
          newState.chess++;
          break;
        case gameTypes.fish:
          newState.fish++;
          break;
        default:
          return newState 
      }
      return newState;
  }
}