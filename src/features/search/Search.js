import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateKeyword } from "./searchSlice";

export function Search({ submitKeyword }) {
    const dispatch = useDispatch();
    const stateKeyword = useSelector(state => state.search.keyword);
    const [keyword, setKeyword] = useState("");
    const handleChange = (e) => {
        const value = e.target.value;
        setKeyword(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateKeyword(keyword));
        submitKeyword(keyword);
    }

    return (
        <div className="container text-center">
            <header className="row justify-content-center">
                <h1 className="col col-4">Reddit Searcher</h1>
                <form className="col col-4 container px-4" onSubmit={handleSubmit}>
                    <input
                        required
                        className="form-control"
                        type="search"
                        placeholder="search reddit"
                        onChange={handleChange}
                        value={keyword}
                    >
                    </input>
                    <button className="col-sm-6 gx-5 w-100 btn btn-lg btn-outline-primary" type="submit">Search</button>
                </form>
            </header>
        </div>
    )
}