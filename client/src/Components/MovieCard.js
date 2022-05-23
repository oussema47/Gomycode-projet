import axios from "axios";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { watched } from "../redux/actions";
function MovieCard(props) {
    const el = props.el
    if (props.el.id) {
        el._id = props.el.id
    }
    const deleteMovie = (id) => {
        axios({
            method: "delete",
            url: "http://localhost:5000/movie/delete/" + id
        }).then((res) => console.log(res.data))
    }
    const watch = (id) => {
        axios({
            method: "patch",
            url: "http://localhost:5000/movie/watch/" + id
        }).then((res) => console.log(res.data))
    }
    const dispatch = useDispatch();
    return (
        <div>
            <Card style={{ backgroundColor: el.watched && "black", width: "18rem" }}>
                <Card.Img variant="top" src={el.images} />
                <Card.Body>
                    <Card.Title> {el.title} </Card.Title>
                    <Card.Text>{el.description}</Card.Text>
                    <Link to={`/movies/${el._id}`}>
                        <Button variant="primary">Details</Button>
                    </Link>
                    <Button variant="primary" onClick={() => {
                        watch(el._id)
                        dispatch(watched(el._id))
                    }}>
                        Watched
                    </Button>
                    <Link to={`/edit/${el._id}`}>
                        {" "}
                        <Button variant="primary">edit</Button>
                    </Link>
                    <Button variant="primary" onClick={() => deleteMovie(el._id)}>
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieCard;