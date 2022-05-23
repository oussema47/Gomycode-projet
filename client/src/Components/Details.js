import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
function Details() {
    const { id } = useParams();
    const [movie, setMovie] = React.useState({})
    React.useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:5000/movie/getMovie/" + id
        }).then((response) => {
            if (response.data) {
                setMovie(response.data)
                console.log(response)
            } else {
            }
        })
        return () => {
            setMovie()
        };
    }, [id]);

    const movies = useSelector((state) => state.movies);
    const foundmovie = movies.find((el) => el.id == id);

    return <div>{foundmovie ? <>{foundmovie.title}</> : <></>} {movie.description} </div>;
}

export default Details;