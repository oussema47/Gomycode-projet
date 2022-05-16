import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function MovieList() {
    const movies = useSelector((state) => state.movies);
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "space-around",
            }}
        >
            {movies.map((el) => (
                <MovieCard el={el} key={el.id}></MovieCard>
            ))}
        </div>
    );
}

export default MovieList;