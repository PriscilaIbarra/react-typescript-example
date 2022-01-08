export type Repository = string;

export type RepositoryArray = Repository[] | [];

export interface RepositoriesState {
    repositories : RepositoryArray;
    loading:boolean;
    error:string | null ;
}

export interface RepositoriesProps {
    repositories : RepositoryArray 
}





