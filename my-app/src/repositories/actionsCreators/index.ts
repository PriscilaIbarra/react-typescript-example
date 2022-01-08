import { 
         SearchRepositoriesAction, 
         SearchRepositoriesSuccessAction,
         SearchRepositoriesErrorAction 
        } from "../actions/index"
import { ActionType } from "../actionsTypes/index"
import { RepositoryArray } from "../types/index"

export const createSearchRepositoriesAction = () : SearchRepositoriesAction =>{
   return {
       type: ActionType.SEARCH_REPOSITORIES
   }
}

export const createSearchRepositoriesSuccessAction = (repositories : RepositoryArray ):SearchRepositoriesSuccessAction=>{
    return{
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: repositories
    }
}

export const createSearchRepositoriesErrorAction = (msg:string):SearchRepositoriesErrorAction=>{
    return {
        type:ActionType.SEARCH_REPOSITORIES_ERROR,
        payload:msg
    }
}