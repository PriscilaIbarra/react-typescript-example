import SearchInput from "./SearchInput";
import RepositoriesList from "./RepositoriesList";
import { useSelector } from "react-redux";
import {RepositoriesProps, RepositoriesState, RepositoryArray} from "../types/index";

const Search : React.FC = ()=>{
    
    const repositories= useSelector<RepositoriesState>(state=>state.repositories);
   
    return(
        <>
           <SearchInput/>
          
        </>
    )
}
export default Search;