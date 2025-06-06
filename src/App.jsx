import { createContext, useState, useEffect } from "react";

import "./App.css";
import MovieList from "./components/MovieList";
// import Filter from "./components/Filter";
import { Route, Routes } from "react-router-dom";
import MovieTrailer from "./components/MovieTrailer";
import Home from "./components/Home";

export const DataContaxt = createContext();
function App() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [addMovie, setAddMovie] = useState({});

    const [movieIndex, setMovieIndex] = useState();

    useEffect(() => {
        fetch("../../movies.json")
            .then((res) => res.json())
            .then((data) => setMovies(data));
    }, []);

    useEffect(() => {
        movies.unshift(addMovie);
        MovieList;
    }, [addMovie]);
    return (
        <>
            <DataContaxt.Provider
                value={{
                    movies,
                    setMovies,
                    search,
                    setAddMovie,
                    setMovieIndex,
                    movieIndex,
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    {movieIndex >= 0 && movies != [] ? (
                        <Route path="/trailer" element={<MovieTrailer />} />
                    ) : (
                        ""
                    )}
                </Routes>
            </DataContaxt.Provider>
        </>
    );
}

export default App;
