import SearchInput from "./SearchInput";
import RepositoriesList from "./RepositoriesList";
import { useSelector } from "react-redux";
import { RepositoryArray} from "../types/index";
import {RootState} from "../../store";
const Search : React.FC = ()=>{
    //state.modulename.attribute
    const repositories  = useSelector<RootState,RepositoryArray>((state)=>state.repositories.repositories);
    const {loading , error} = useSelector((state:RootState)=>state.repositories)
    return(
        <>
           <SearchInput/>
           {error && <sub>{error}</sub>}
           {loading && <sub>Loading...</sub>}
           <RepositoriesList repositories={repositories}/>
        </>
    )
}
export default Search;