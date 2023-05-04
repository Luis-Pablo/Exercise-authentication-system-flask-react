import React, { } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Navbar(props) {

    const navigate = useNavigate();

    function logMeOut() {
        axios({
            method: "POST",
            url: "http://127.0.0.1:5000/logout",
        })
            .then((response) => {
                props.token()
                localStorage.removeItem('email')
                navigate("/");
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })
    }

    const logged = localStorage.getItem('email');

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
  
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
                        </li>

                    </ul>
              
                    {!logged ?
                        <button className="btn btn-outline-success" type="submit" onClick={(e) => { e.preventDefault(); navigate("/login")} }>Login</button>
                        : <button className="btn btn-outline-danger" type="submit" onClick={logMeOut}>Logout</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;