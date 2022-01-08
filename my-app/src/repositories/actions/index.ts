import { ActionType } from "../actionsTypes/index";
import { RepositoryArray } from "../types/index";

export interface SearchRepositoriesAction {
    type:ActionType.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
    type:ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload:RepositoryArray;
}

export interface SearchRepositoriesErrorAction {
    type:ActionType.SEARCH_REPOSITORIES_ERROR;
    payload:string;
}

export type Action = SearchRepositoriesAction 
             |SearchRepositoriesSuccessAction
             |SearchRepositoriesErrorAction;