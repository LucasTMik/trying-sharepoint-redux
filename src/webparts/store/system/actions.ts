export enum actionTypes {
    vote
}

export enum gameTypes {
    checkers,
    chess,
    fish
}

export interface IVoteData {
    gameType: gameTypes;
}

export interface IAction {
    type: actionTypes;
    data: IVoteData;
}

//Possible votes of the action vote
export const voteCheckers = function():IAction {
    return {
        type: actionTypes.vote,
        data: { gameType: gameTypes.checkers }
    }
}

export const voteChess = function(): IAction {
    return {
        type: actionTypes.vote,
        data: { gameType: gameTypes.chess }
    }
}

export const voteFish = function():IAction {
    return {
        type: actionTypes.vote,
        data: { gameType: gameTypes.fish }
    }
}