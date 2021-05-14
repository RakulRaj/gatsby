
import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon } from "mdbreact";
import { StaticQuery, graphql } from 'gatsby'

const Footer = () => {

    return (
      <StaticQuery
      query={graphql`
      {
        allStrapiSubmenus {
          edges {
            node {
              menulist {
                menuName
                id
                subMenu
              }
            }
          }
        }
         allStrapiHeaders {
          edges {
            node {
              bgcolor2
              bgcolor1
              color
            }
          }
        }
      }
    `}
      render={data=>
        <MDBFooter style={{
          backgroundColor: data.allStrapiHeaders.edges[0].node.bgcolor2,
        }} className="font-small pt-0">
        <MDBContainer>
            <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
            {data.allStrapiSubmenus.edges[0].node.menulist.map(
                      (document, index1) => (
                <MDBCol key={index1} md="2" className="b-3">
                    <h6 className="title font-weight-bold">
                        <a  href="#!">{document.menuName}</a>
                    </h6>
                </MDBCol>
                      ))}
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

    </MDBFooter>}
    ></StaticQuery>
    );
}

export default Footer;
