import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import image from "../images/mockup.webp"
import president from "../images/boardMembers/president_boarstara.jpg";

const CardExample = () => {
    return (
        <MDBCol style={{ maxWidth: "363px" }}>
            <MDBCard>
            <MDBCardImage className="img-fluid" src={president} alt=""  waves />
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                    <MDBBtn href="#">Read More</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default CardExample;
