import { useDispatch } from "react-redux";
import { Lister } from '../lister/Lister';
import { redditThunk } from "../lister/listerSlice";
import { SearchBox } from "../SearchBox/SearchBox";
import { useState } from "react";


export function Search() {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setKeyword(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (keyword === "") return;
        dispatch(redditThunk(keyword));
    }

    return (
        <>
            <SearchBox
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                keyword={keyword}
            />
            <Lister />
        </>
    )
}