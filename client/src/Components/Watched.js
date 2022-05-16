import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function Watched() {
    const movies = useSelector((state) => state.movies);
    return (
        <div>
            {movies
                .filter((el) => el.watched)
                .map((el) => (
                    <MovieCard el={el}></MovieCard>
                ))}
        </div>
    );
}

export default Watched;