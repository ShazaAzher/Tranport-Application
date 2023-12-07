import React from "react";
import Container from 'react-bootstrap/Container';

function Home() {
    return (
        <Container className="mt-5 text-white">
            <h1 className="text-center">Uzair Transport And Tourism</h1>
            <div className="row mt-5 container justify-content-center">
                <div className="col-7 my-3">
                    <a href="/login" className="btn btn-secondary btn-lg d-block">Login</a>
                </div>
                <div className="col-7 my-3">
                    <a href="/register" className="btn btn-secondary btn-lg d-block">Register</a>
                </div>
            </div>
        </Container>
    )
}

export default Home;