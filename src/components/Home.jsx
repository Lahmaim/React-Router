import { useContext } from "react";
import Filter from "./Filter";
import MovieList from "./MovieList";
import { DataContaxt } from "../App";

export default function Home() {
    const { search, setSearch } = useContext(DataContaxt);

    return (
        <>
            <input
                type="text"
                placeholder="search movie"
                className="searchFilter"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            {search ? <Filter /> : <MovieList />}
        </>
    );
}
