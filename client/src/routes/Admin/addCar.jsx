import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function addCar() {

    const history = useNavigate();

    const [Category, setCategory] = useState("");
    const [Model, setModel] = useState("");
    const [Thumbnail, setThumbnail] = useState("");

    async function submit(e){
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/admin/addCar/" , {
                Category, Thumbnail, Model
            })
            .then(res=>{
                history("admin/home")
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
                            <label>model:</label>
                            <input type="text" onChange={(e)=>{setModel(e.target.value)}} placeholder="Model Name" className="form-control" name="model"/>
                        </div>
                        <div className="form-group col-6">
                            <label>category:</label>
                            <input type="text" onChange={(e)=>{setCategory(e.target.value)}} placeholder="Category" className="form-control" name="category"/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="form-group col-6">
                            <label>thumbnail:</label>
                            <input type="text" onChange={(e)=>{setThumbnail(e.target.value)}} placeholder="thumbnail" className="form-control" name="thumbnail"/>
                        </div>
                    </div>
                    <input className="mt-5 btn btn-lg btn-primary" type="submit" onClick={submit} value="Register"/>
                </form>
            </div>
        </Container>
    )
}

export default addCar;