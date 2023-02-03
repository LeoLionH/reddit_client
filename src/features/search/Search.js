import { useDispatch, useSelector } from "react-redux";
import { updateKeyword } from "./searchSlice";
import { Lister } from '../lister/Lister';
import { redditThunk } from "../lister/listerSlice";

export function Search() {
    const dispatch = useDispatch();
    const stateKeyword = useSelector(state => state.search.keyword);

    const handleChange = (e) => {
        const value = e.target.value;
        dispatch(updateKeyword(value));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (stateKeyword === "") return;
        dispatch(redditThunk(stateKeyword));
    }

    return (
        <header className="row headerContainer">
            <h1 className="col col-2 searchContainer">Reddit Searcher</h1>
            <form data-testid="searchForm" className="col col-2 searchContainer" onSubmit={handleSubmit}>
                <input
                    required
                    className="form-control"
                    type="search"
                    placeholder="Search Reddit"
                    onChange={handleChange}
                    value={stateKeyword}
                >
                </input>
                <button
                    data-testid="search-button"
                    className="btn btn-outline-primary"
                    type="submit">Search
                </button>
            </form>
            <Lister />
        </header>
    )
}