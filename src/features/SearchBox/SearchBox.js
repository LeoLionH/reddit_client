import React from 'react';

export function SearchBox(props) {
    const { handleSubmit, handleChange, keyword } = props;
    return (
        <header className="row headerContainer">
            <h1 className="col col-2 searchContainer">Reddit Searcher</h1>
            <form data-testid="searchForm" className="col col-2 searchContainer" onSubmit={handleSubmit}>
                <input
                    required
                    data-testid="searchInput"
                    className="form-control"
                    type="search"
                    placeholder="Search Reddit"
                    onChange={handleChange}
                    value={keyword}
                >
                </input>
                <button
                    data-testid="search-button"
                    className="btn btn-outline-primary"
                    type="submit">Search
                </button>
            </form>
        </header>
    )
}