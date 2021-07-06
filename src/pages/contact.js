import React from "react"
import Layout from "../components/layout"
import '../assets/main.css'
import { MDBContainer, MDBBtn } from "mdbreact"

function Contact() {

    function handlePick() {
        //localStorage.setItem("token", 'undefined')
        localStorage.token = 'undefined'
        //alert("hello");
        alert(localStorage.token);


    }


    return (
        <Layout>
            <MDBContainer fluid >

                <div className="container plain-conatiner">

                    <h1>Contact coming soon....</h1>

                </div>

            </MDBContainer>
        </Layout>
    );
}

export default Contact