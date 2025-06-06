import { useContext } from "react";
import { DataContaxt } from "../App";

export default function AddMovie() {
    const { setAddMovie } = useContext(DataContaxt);
    return (
        <>
            <div className="addMovies">
                <input id="imgUrl" type="text" placeholder="image url" />
                <input id="movieName" type="text" placeholder="name of movie" />
                <input
                    id="rateMovie"
                    type="number"
                    placeholder="rate of movie"
                />
                <textarea
                    id="desctionMovie"
                    type="text"
                    placeholder="description of movie"
                />
                <button
                    onClick={() => {
                        imgUrl.value.trim() &&
                        movieName.value &&
                        rateMovie.value &&
                        desctionMovie.value
                            ? setAddMovie({
                                  image: imgUrl.value,
                                  name: movieName.value,
                                  rating: rateMovie.value,
                                  description: desctionMovie.value,
                              })
                            : "";
                    }}
                >
                    Add Movie
                </button>
            </div>
        </>
    );
}
