import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term:string)=>{
    return async (dispatch: Dispatch<Action>)=>{
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        });

        try{
            const {data} = await axios.get('http://registre.npmjs.org/-/v1/search', {
                params:{
                    text:term
                }
            });
            console.log(data);
            const names = data.object.map((result: any)=>{
                return result.package.name;
            });

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names,
            })
        
        } catch(err: any){
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message,
            })
        }
    }
}