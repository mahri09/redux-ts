import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term:string)=>{
    return async (dispatch: Dispatch<Action>)=>{
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        });

        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/' + term) 
            const data = await response.json();
            const title = data.map((result: any)=>{
                return result.title
        })
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: title
            })
        
        } catch(err: any){
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message
            })
        }
    }
}