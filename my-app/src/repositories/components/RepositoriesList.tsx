import { RepositoriesProps } from "../types/index"
import { memo } from "react";

const RepositoriesList : React.FC<RepositoriesProps> = ({repositories}) => {

    return(
        <>
           <ol>
               {
                  repositories && repositories.map( (description:string)=>(
                      <li key={description} >{description}</li>
                  )) 
               }
           </ol> 
        </>
    )
}

export default memo(RepositoriesList);