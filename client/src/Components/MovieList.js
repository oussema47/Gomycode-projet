import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import axios from "axios";
function MovieList() {
    const [list, setList] = React.useState([])
    const movies = useSelector((state) => state.movies);
    React.useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:5000/movie/getAll"
        }).then((res) => {
            setList(res.data)
        })
        return () => {
            setList({});
        };

    }, []);
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
            {list.map((el) => (
                <MovieCard el={el} key={el._id}></MovieCard>
            ))}
        </div>
    );
}

export default MovieList;