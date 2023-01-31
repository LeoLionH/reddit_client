import { useDispatch, useSelector } from "react-redux";
import { updateKeyword } from "./searchSlice";

export function Search({ submitKeyword }) {
    const dispatch = useDispatch();
    const stateKeyword = useSelector(state => state.search.keyword);

    const handleChange = (e) => {
        const value = e.target.value;
        dispatch(updateKeyword(value));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        submitKeyword(stateKeyword);
    }

    return (
        <div className="headerContainer text-center">
            <header className="row justify-content-center">
                <h1 className="col col-4">Reddit Searcher</h1>
                <form className="col col-2 search container" onSubmit={handleSubmit}>
                    <input
                        required
                        className="form-control"
                        type="search"
                        placeholder="search reddit"
                        onChange={handleChange}
                        value={stateKeyword}
                    >
                    </input>
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                </form>
            </header>
        </div>
    )
}