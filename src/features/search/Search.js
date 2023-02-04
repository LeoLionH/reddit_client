import { useDispatch, useSelector } from "react-redux";
import { updateKeyword } from "./searchSlice";
import { Lister } from '../lister/Lister';
import { redditThunk } from "../lister/listerSlice";
import { SearchBox } from "../SearchBox/SearchBox";


export function Search() {
    const dispatch = useDispatch();
    const selectKeyword = useSelector(state => state.search.keyword);
    const checkState = useSelector(state => state);

    const handleChange = (e) => {
        const value = e.target.value;
        dispatch(updateKeyword(value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectKeyword === "") return;
        dispatch(redditThunk(selectKeyword));
    }

    return (
        <>
            <SearchBox
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
            <Lister />
        </>
    )
}