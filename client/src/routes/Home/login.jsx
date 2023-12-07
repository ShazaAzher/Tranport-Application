import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    axios.defaults.withCredentials = true;
    async function submit(e){
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/login" , {
                email, password
            })
            .then(res=>{
                if(res.data=="exist"){
                    console.log("logged in as user")
                    history("/users/carView");
                } else if (res.data=="existA"){
                    console.log("logged in as admin")
                    history("/admin/manageCars");
                } else if(res.data=="notPass"){
                    alert("Incorrect password!");
                } else if(res.data=="notExist"){
                    alert("Email not found!");
                }
            })
            .catch(e=>{
                alert("incorrect details");
                console.log(e);
            })
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container className="mt-5 text-white">
            <h1>Login</h1>
            <div className="p-5 col-5">
                <form action="POST">
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" className="form-control" name="email"/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" className="form-control" name="password"/>
                    </div>
                    <input className="mt-3 btn btn-lg btn-primary" type="submit" onClick={submit} value="Login"/>
                </form>
            </div>
        </Container>
    )
}

export default Login;