import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "../actions/index"
import 
{
    createSearchRepositoriesAction,
    createSearchRepositoriesSuccessAction,
    createSearchRepositoriesErrorAction
} 
from "../actionsCreators/index";

const baseURL = 'https://registry.npmjs.org/-/v1/search';

export const searchRepositories = (term : string) => {
   return async(dispatch:Dispatch<Action>) =>{

                dispatch(createSearchRepositoriesAction())
                
                try{
                    const {data} = await axios.get(baseURL,{params:{text:term}});
                    const repositories = await data.objects.map((result:any)=>{
                          return result.package.name
                    })
                    dispatch(createSearchRepositoriesSuccessAction(repositories))
                }
                catch(error:any){
                    dispatch(createSearchRepositoriesErrorAction(error.message));
                } 
    
   }
}