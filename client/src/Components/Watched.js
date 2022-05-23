import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import axios from "axios";
function Watched() {
    const [list, setList] = React.useState([])
    React.useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:5000/movie/getWatched"
        }).then((res) => {
            setList(res.data)
        })
        return () => {
            setList({});
        };

    }, []);
    const movies = useSelector((state) => state.movies);
    return (
        <div>
            {movies
                .filter((el) => el.watched)
                .map((el, index) => (
                    <MovieCard key={index} el={el}></MovieCard>
                ))}
            {
                list.map((el, index) => (
                    <MovieCard key={index} el={el}></MovieCard>
                ))}

        </div>
    );
}

export default Watched;