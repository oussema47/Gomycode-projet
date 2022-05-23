import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addmovie } from "../redux/actions";
import axios from 'axios';
import $ from 'jquery';
function AddMovies() {
    const [imageUrl, setImageUrl] = React.useState("")
    const [message, setMessage] = React.useState()
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [image, setimage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const file = new FormData()
    const setImage = () => {
        $('#avatar').trigger('click');
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#blah').attr('src', e.target.result);
                }
                file.append('avatar', input.files[0])
                axios.post("http://localhost:5000/file/upload", file, {
                    headres: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                ).then((res) => setImageUrl(res.data))
                reader.readAsDataURL(input.files[0]);
            }
        }
        $("#avatar").change(async function () {
            console.log("file changes")
            await readURL(this);
        })
    }
    const addMovie = async () => {
        await axios({
            method: "post",
            data: {
                title: title,
                description: description,
                images: imageUrl
            },
            url: 'http://127.0.0.1:5000/movie/addMovie'
        }).then((response) => {
            setMessage(response.data)
        })
    }
    return (
        <div className="container mt-5" style={{ maxWidth: "900px" }}>
            <>
                <Form.Group className="mb-3">
                    {message && <Alert variant={message.type}>
                        {message.message}
                    </Alert>}
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
                    <Button variant="outline-primary" onClick={() => setImage()} className="w-100 mb-3">Set Image</Button>
                    <Form.Control
                        style={{ display: "none" }}
                        name="avatar" accept="image/png, image/jpeg" id="avatar" type="file"
                        placeholder="enter your post "
                    />
                </Form.Group>

                <Button
                    variant="info"
                    onClick={(e) => {
                        addMovie()
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