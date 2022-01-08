import { RepositoriesState } from "../types/index";
import { ActionType } from "../actionsTypes/index";
import { Action } from "../actions/index";

const initialState : RepositoriesState = {
    loading:false,
    error:null,
    repositories:[]
}

const reducer = (state:RepositoriesState = initialState , action:Action): RepositoriesState=>{
   
    switch(action.type){
        case ActionType.SEARCH_REPOSITORIES:
            return {loading:true, error:null,repositories:[]}
           
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return {loading:false,error:null,repositories:action.payload}
            
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return {loading:false, error:action.payload , repositories:[]}

        default:
            return state
    }

}

export default reducer;