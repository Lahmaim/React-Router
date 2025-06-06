import { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { DataContaxt } from "../App";
import AddMovie from "./AddMovie";

export default function MovieList() {
    const { movies } = useContext(DataContaxt);

    return (
        <>
            <AddMovie />
            <div className="movieList">
                {movies.map((movie, index) => {
                    return (
                        <div key={index}>
                            <MovieCard
                                image={movie.image}
                                title={movie.name}
                                rate={movie.rating}
                                description={movie.description}
                                index={index}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
