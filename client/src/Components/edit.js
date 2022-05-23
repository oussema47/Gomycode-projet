import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editmovie } from "../redux/actions";
import axios from "axios";
import $ from 'jquery';
function Edit() {
    const [imageUrl, setImageUrl] = React.useState("")
    const [aux, setAux] = useState({})
    const { id } = useParams();
    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:5000/movie/getMovie/" + id
        }).then((response) => {
            if (response.data) {
                setAux(response.data)
                setImageUrl(response.data.images)
            }
        })
        return () => {
            setAux({})
        };
    }, [id]);
    const edit = () => {
        axios({
            method: "patch", data: {
                title: title,
                description: description,
                images: imageUrl
            },
            url: "http://localhost:5000/movie/update/" + id
        }).then((response) => {
            if (response.data) {
                console.log(response.data)
            }
        })
    }
    const movies = useSelector((state) => state.movies);

    let foundmovie = movies.find((el) => el.id == id);
    if (
        !foundmovie
    ) {
        foundmovie = aux
    }
    const [title, settitle] = useState(foundmovie.title);
    const [description, setdescription] = useState(foundmovie.description);
    const [posterUrl, setposterUrl] = useState(foundmovie.posterUrl);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
    return (
        <div className="container mt-5" style={{ maxWidth: "900px" }}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    onChange={(e) => settitle(e.target.value)}
                    value={title || aux.title}
                    placeholder="enter your title"
                />
                <Form.Label>description</Form.Label>
                <Form.Control
                    onChange={(e) => setdescription(e.target.value)}
                    value={description || aux.description}
                    placeholder="enter your description"
                />
                <Form.Label>Image</Form.Label>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imageUrl} />
                </Card>
                <Button variant="outline-primary" onClick={() => setImage()} className="w-100 mb-3">Set Image</Button>
                <Form.Control
                    style={{ display: "none" }}
                    name="avatar" accept="image/png, image/jpeg" id="avatar" type="file"
                    placeholder="enter your post "
                />
            </Form.Group>
            <Button className="mb-3"
                onClick={() => {
                    edit()
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