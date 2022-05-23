import React from 'react'
import { Form, Button, Alert } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Register() {
    let navigate = useNavigate();
    const [message, setMessage] = React.useState()
    const [values, setValues] = React.useState({
        password: '',
        lastName: '',
        firstName: '',
        email: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const register = async () => {
        await axios({
            method: "post",
            data: {
                username: values.firstName + " " + values.lastName,
                email: values.email,
                password: values.password
            },
            url: 'http://127.0.0.1:5000/user/register'
        }).then((response) => {
            setMessage(response.data)
            if (response.data.type === "success") {
                navigate('/login');
            }
        })
    }
    return (
        <div className="container mt-5" style={{ maxWidth: "900px" }}>
            <Form>
                {message && <Alert variant={message.type}>
                    {message.message}
                </Alert>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={handleChange('firstName')} type="First name" placeholder="Enter First name" />
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={handleChange('lastName')} type="Last name" placeholder="Enter last name" />

                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleChange('email')} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange('password')} type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" onClick={() => register()}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Register