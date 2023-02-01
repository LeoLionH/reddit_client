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
        <header className="row headerContainer">
            <h1 className="col col-2 searchContainer">Reddit Searcher</h1>
            <form className="col col-2 searchContainer" onSubmit={handleSubmit}>
                <input
                    required
                    className="form-control"
                    type="search"
                    placeholder="Search Reddit"
                    onChange={handleChange}
                    value={stateKeyword}
                >
                </input>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
        </header>
    )
}