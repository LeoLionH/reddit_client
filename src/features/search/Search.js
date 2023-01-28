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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="search reddit"
                onChange={handleChange}
                value={keyword}
            >
            </input>
            <p>Current search: {stateKeyword}</p>
            <button type="submit">Search</button>
        </form>
    )
}