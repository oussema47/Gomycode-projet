import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Details() {
    const { id } = useParams();

    const movies = useSelector((state) => state.movies);
    const foundmovie = movies.find((el) => el.id == id);

    return <div> {foundmovie.title} </div>;
}

export default Details;