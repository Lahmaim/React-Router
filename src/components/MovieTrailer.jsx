import { useContext } from "react";
import { DataContaxt } from "../App";

export default function MovieTrailer() {
    const { movies, movieIndex } = useContext(DataContaxt);

    console.log();

    return (
        <>
            <h2
                style={{
                    padding: "10px",
                    marginBottom: "10px",
                    backgroundColor: "#EEE",
                }}
            >
                {movies[parseInt(movieIndex)].name}
            </h2>

            <iframe
                width="560"
                height="315"
                src={movies[parseInt(movieIndex)].trailer}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

            <p>{movies[parseInt(movieIndex)].description}</p>
        </>
    );
}
