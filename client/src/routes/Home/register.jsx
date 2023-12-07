import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Register() {

    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");

    async function submit(e){
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/register/" , {
                email, password, fName, lName
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User with this email already exists!");
                } else if(res.data=="notExist"){
                    history("/login", {state: {id:email}});
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
            <h1>Register</h1>
            <div className="p-5 col-8">
                <form action="POST">
                    <div className="row mt-3">
                        <div className="form-group col-6">
                            <label>First Name:</label>
                            <input type="text" onChange={(e)=>{setFName(e.target.value)}} placeholder="First Name" className="form-control" name="fName"/>
                        </div>
                        <div className="form-group col-6">
                            <label>Last Name:</label>
                            <input type="text" onChange={(e)=>{setLName(e.target.value)}} placeholder="Last Name" className="form-control" name="lname"/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="form-group col-6">
                            <label>Email:</label>
                            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" className="form-control" name="email"/>
                        </div>
                        <div className="form-group col-6">
                            <label>Password:</label>
                            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" className="form-control" name="password"/>
                        </div>
                    </div>
                    <input className="mt-5 btn btn-lg btn-primary" type="submit" onClick={submit} value="Register"/>
                </form>
            </div>
        </Container>
    )
}

export default Register;