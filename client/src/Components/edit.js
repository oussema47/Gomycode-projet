import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editmovie } from "../redux/actions";
function Edit() {
    const movies = useSelector((state) => state.movies);
    const { id } = useParams();
    const foundmovie = movies.find((el) => el.id == id);
    const [title, settitle] = useState(foundmovie.title);
    const [description, setdescription] = useState(foundmovie.description);
    const [posterUrl, setposterUrl] = useState(foundmovie.posterUrl);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    placeholder="enter your title"
                />
                <Form.Label>description</Form.Label>
                <Form.Control
                    onChange={(e) => setdescription(e.target.value)}
                    value={description}
                    placeholder="enter your description"
                />
                <Form.Label>Image</Form.Label>
                <Form.Control
                    onChange={(e) => setposterUrl(e.target.value)}
                    value={posterUrl}
                    placeholder="enter your post "
                />
            </Form.Group>
            <Button
                onClick={() => {
                    dispatch(editmovie(id, { title, description, posterUrl }));
                    navigate("/movies");
                }}
            >
                save changes
            </Button>
        </div>
    );
}

export default Edit;