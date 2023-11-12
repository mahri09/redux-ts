import { useState } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";

// dispatch(actionCreators.searchRepositories(term) as any);
const RepositoriesList : React.FC = () => {
    const [term, setTerm] = useState('');
    const{searchRepositories} = useActions();
    const {data, error, loading} = useTypeSelector((state) => state.repositories);
    console.log(data);

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // dispatch(actionCreators.searchRepositories(term)); before we created hooks!
         searchRepositories(term);// after calling hooks
    }
    return (
        <div>
            <form id="form" onSubmit={handleOnSubmit}> 
                <input value={term} onChange={e=>setTerm(e.target.value)}/>
                <button>Search</button> <i style={{color:'red'}}> type <strong>todos</strong> and click button</i>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading &&  data.map((title,i )=> <div key={i}>{title}</div>)}
        </div>
    )
}

export default RepositoriesList;