import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addmovie } from "../redux/actions";
function AddMovies() {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [image, setimage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(navigate);
    return (
        <div>
            <>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        placeholder="enter your title"
                        onChange={(e) => settitle(e.target.value)}
                        value={title}
                    />
                    <Form.Label>description</Form.Label>
                    <Form.Control
                        placeholder="enter your description"
                        onChange={(e) => setdescription(e.target.value)}
                        value={description}
                    />
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        placeholder="enter your post "
                        onChange={(e) => setimage(e.target.value)}
                        value={image}
                    />
                </Form.Group>

                <Button
                    variant="info"
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(
                            addmovie({
                                id: Math.random(),
                                title,
                                description,
                                posterUrl: image,
                                watched: false,
                            })
                        );
                        navigate("/movies");
                    }}
                >
                    {" "}
                    save changes{" "}
                </Button>
            </>
        </div>
    );
}

export default AddMovies;