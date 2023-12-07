import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';

function manageAppointments() {

    const [ data, setData ] = useState([]);
    const url_id = useParams();
    const baseUrl = `http://localhost:8000/user/getBookings/${url_id._id}`;

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await fetch(baseUrl);
                if(!response.ok) {throw new Error("Data fetch failed!")}
                const dataJson = await response.json();
                setData(dataJson);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return (
        <Container className="mt-5 text-white">
            <h1 className="text-center">Appointments</h1>
            
                {data.map((item)=> (
                    <div className="row mt-5 container justify-content-center">
                        <div className="col-3 my-3">
                            <h3>{item.routeName}</h3>
                        </div>
                        <div className="col-3 my-3">
                            <h3>{item.driverName}</h3>
                        </div>
                        <div className="col-3 my-3">
                            <h3>{item.status}</h3>
                        </div>
                        <div className="col-3 my-3">
                            <a href="" className="btn btn-primary">Update</a>
                        </div>
                        <div className="col-3 my-3">
                            <a href="" className="btn btn-danger">Delete</a>
                        </div>
                    </div>
                ))}
            
        </Container>
    )
}

export default manageAppointments;