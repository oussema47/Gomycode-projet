import React from 'react'
import { Form, Button, Alert } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
    let navigate = useNavigate();
    const [message, setMessage] = React.useState()
    const [values, setValues] = React.useState({
        password: '',
        userName: '',
        email: ''
    });
    React.useEffect(() => {
        localStorage.setItem("login", "non")

        return () => {

        };

    }, []);
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const login = async () => {
        await axios({
            method: "post",
            data: {
                email: values.email,
                password: values.password
            },
            url: 'http://127.0.0.1:5000/user/logIn'
        }).then((response) => {
            setMessage(response.data)
            if (response.data.type === "success") {
                if (response.data.user.role === "Admin") {
                    localStorage.setItem("role", "admin")
                }
                else {
                    localStorage.setItem("role", "user")
                }
                localStorage.setItem("login", "yes")
                navigate('/');
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={() => login()} variant="primary">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Login;