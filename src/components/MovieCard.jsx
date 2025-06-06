import { useContext } from "react";
import { DataContaxt } from "../App";
import { useNavigate } from "react-router-dom";

export default function MovieCard(props) {
    const { setMovieIndex } = useContext(DataContaxt);
    const navigate = useNavigate();
    return (
        <>
            <div
                className="movieCard"
                onClick={() => {
                    setMovieIndex(props.index);
                    navigate("/trailer");
                }}
            >
                <img src={props.image} alt="" />
                <h3 className="titleCard">{props.title}</h3>
                <p>
                    rating : <strong>{props.rate}</strong>
                </p>
                <p style={{ fontSize: "12px", padding: "10px" }}>
                    {props.description}
                </p>
            </div>
        </>
    );
}
