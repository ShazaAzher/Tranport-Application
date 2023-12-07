import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';

function manageDrivers() {

    const [ data, setData ] = useState([]);
    const url_id = useParams();
    const baseUrl = `http://localhost:8000/admin/getDrivers/`;

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
            <h1 className="text-center">Drivers</h1>
            
                {data.map((item)=> (
                    <div className="row mt-5 container justify-content-center">
                        <div className="col-3 my-3">
                            <h3>{item.driver}</h3>
                        </div>
                        <div className="col-3 my-3">
                            <h3>{item.gender}</h3>
                        </div>
                        <div className="col-3 my-3">
                            <h3>{item.status}</h3>
                        </div>
                    </div>
                ))}
            
        </Container>
    )
}

export default manageDrivers;