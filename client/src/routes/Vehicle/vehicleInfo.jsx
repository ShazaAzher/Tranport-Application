import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';

function vehicleInfo() {

    const [ data, setData ] = useState([]);
    const [ route, setRoute ] = useState([]);
    const url_id = useParams();
    const baseUrl = `http://localhost:8000/getVehicles/${url_id._id}`;

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
        <div className="mt-3 ms-5">
            <Container>
                <h1>vehicleInfo</h1>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </Container>
        </div>
    )
}

export default vehicleInfo;