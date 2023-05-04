import React, { useState } from "react";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    const registerUser = () => {
        axios.post('http://127.0.0.1:5000/signup', {
            name: name,
            email: email,
            password: password
        })
            .then(function (response) {
                console.log(response);
                navigate("/login");
            })
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 401) {
                    alert("Invalid credentials");
                }
            });
    };

    
    return (
        <div>
            <div className="container h-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-3 me-3">Create Your Account</p>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="email" value={name} onChange={(e) => setName(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid username" />
                                    <label className="form-label" htmlFor="form3Example3">User name</label>
                                </div>


                                <div className="form-outline mb-4">
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>


                                <div className="form-outline mb-3">
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>

                               

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg" onClick={() => registerUser()} >Sign Up</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Login to your account <Link to="/login" className="link-danger">Login</Link></p>
                                </div>

                            </form>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}