import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function manageCars() {

    const baseUrl = "http://localhost:8000/getVehicles";
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ category, setCategory ] = useState("");

    useEffect(()=>{
        const fetchData = async()=>{
            try {

                let url = baseUrl;
                if(category) {
                    url += `?category=${category}`;
                }

                const response = await fetch(url);
                if(!response.ok) {throw new Error("Data fetch failed!")}
                const dataJson = await response.json();
                setData(dataJson);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setError("Unable to fetch data");
                setIsLoading(false);
            }
        }
        fetchData();
    }, [category])

    return (
        <div className="mt-3 ms-5">
            <Container>
                <h1 >Manage Vehicles</h1>
                <a href="client/src/routes/Admin/addCar.jsx">Add Car</a>

                <div className="text-end filters mt-2">
                    <label>Categories: </label>
                    <select onChange={(e)=> setCategory(e.target.value)}>
                        <option value="">All</option>
                        <option value="Sports">Sports</option>
                        <option value="SUV">SUV</option>
                        <option value="Four-door">Four-door</option>
                        <option value="Two-door">Two-door</option>
                        <option value="Vans">Vans</option>
                        <option value="Trucks">Trucks</option>
                        <option value="Motorcycle">Motorcycles</option>
                    </select>
                </div>

                {isLoading ? (<h3 className="mt-5">Loading...</h3>) : error ? (<h3 className="mt-5">{error}</h3>) : (
                    <Row className="justify-content-center mt-5">
                        {data.map((item)=> (
                            <Col className="m-2 col-3 border text-center" id={item._id}>
                                    <img className="mb-4" src={item.thumbnail}></img>
                                    <h3>{item.model}</h3>
                                    <h4>Category: {item.category}</h4>
                                    <h4>Available: {(item.available)?"yes":"no"}</h4>
                                {(item.available)?(
                                    <Link to={`/vehicle/${item._id}`}><p className="btn btn-lg btn-success my-2">Delete</p></Link>
                                ):(
                                    <p className="btn btn-lg btn-success my-2 disabled">Delete</p>
                                )}
                                
                                    
                            </Col>
                        ))}
                    </Row>
                )}

            </Container>
        </div>
    )
}

export default manageCars;