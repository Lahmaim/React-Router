import { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { DataContaxt } from "../App";

export default function Filter() {
    const { movies, search } = useContext(DataContaxt);
    const [filterMovie, setFilterMovie] = useState([]);

    // movies.length = 10;
    useEffect(() => {
        return setFilterMovie(
            movies.filter((movie) => {
                return movie.name.toLowerCase().includes(search);
            })
        );
        // return setFilterMovie(movieF);
    }, [search]);
    return (
        <>
            <div className="movieList">
                {filterMovie.map((movie, index) => {
                    return (
                        <div key={index}>
                            <MovieCard
                                image={movie.image}
                                title={movie.name}
                                rate={movie.rating}
                                description={movie.description}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
