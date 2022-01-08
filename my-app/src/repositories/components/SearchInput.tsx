import { useState } from "react";
import { useDispatch} from "react-redux";
import { searchRepositories } from "../middlewares/index";


const SearchInput: React.FC = ()=>{
    
    const [term, setTerm] = useState<string>('');
    
    const dispatch = useDispatch();
    
    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setTerm(e.target.value);
        dispatch(searchRepositories(term));
    }
    
    return(
        <>
             <label>Search:</label>
             <input 
             type="text"
             value={term}
             onChange={handleOnChange}
             />
        </>
    )
}

export default SearchInput;