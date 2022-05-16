import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { watched } from "../redux/actions";
function MovieCard({ el }) {
    const dispatch = useDispatch();
    return (
        <div>
            <Card style={{ backgroundColor: el.watched && "black", width: "18rem" }}>
                <Card.Img variant="top" src={el.posterUrl} />
                <Card.Body>
                    <Card.Title> {el.title} </Card.Title>
                    <Card.Text>{el.description}</Card.Text>
                    <Link to={`/movies/${el.id}`}>
                        <Button variant="primary">Details</Button>
                    </Link>
                    <Button variant="primary" onClick={() => dispatch(watched(el.id))}>
                        Watched
                    </Button>
                    <Link to={`/edit/${el.id}`}>
                        {" "}
                        <Button variant="primary">edit</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieCard;