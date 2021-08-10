import React, { useState, useEffect } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            window.location.replace("http://localhost:3000/dashboard");
        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = (e) => {
        // Keep the page from refreshing when the form is submitted
        e.preventDefault();

        // Create a user object
        const user = {
            email: email,
            password: password,
        };

        // Fetch request
        fetch("http://127.0.0.1:8000/api/authlogin/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.key) { // data.key will return token from api
                    localStorage.clear();
                    localStorage.setItem("token", data.key);
                    window.location.replace("http://localhost:3000/dashboard");
                } else {
                    setEmail("");
                    setPassword("");
                    localStorage.clear();
                    setErrors(true);
                }
            });
    };

    return (
        <>
            {loading === false && <h1>Login</h1>}
            {errors === true && <h2>Error occurred when login</h2>}
            {loading === false && (
                <form onSubmit = {onSubmit}>
                    <label htmlFor='email'Email Address></label>
                    <br />
                    <input
                        name='email'
                        type='email'
                        value={email}
                        required 
                        onChange={e => setEmail(e.target.value)}
                        />{' '}
                    <br/>
                    <label htmlFor='password'>Password</label>
                    <br />
                    <input
                        name='password'
                        type='password'
                        value={password}
                        required 
                        onChange={e => setPassword(e.target.value)}
                        />{' '}
                    <br />
                    <input type='submit' value='Login' />
                </form>
            )}
        </>
    );
};

export default Login;
