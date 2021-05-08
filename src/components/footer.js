import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon } from "mdbreact";

const Footer = () => {
    return (
        <div>
        <MDBFooter className="font-small pt-0">
            <MDBContainer>
                <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="#!">Home</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="#!">Community</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="#!">Interpreters</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="#!">Members</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="#!">Calendar</a>
                        </h6>
                    </MDBCol>
                </MDBRow>
                <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
                <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
                    
                </MDBRow>
                <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
                <MDBRow className="pb-3">
                    <MDBCol md="12">
                        <div className="mb-5 flex-center">
                            <MDBIcon fab icon="facebook-f" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>
                            <MDBIcon fab icon="twitter" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>
                            <MDBIcon fab icon="google-plus-g" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>
                            <MDBIcon fab icon="linkedin-in" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>
                            <MDBIcon fab icon="instagram" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>
                            <MDBIcon fab icon="pinterest" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
           
        </MDBFooter>
        </div>
    );
}

export default Footer;