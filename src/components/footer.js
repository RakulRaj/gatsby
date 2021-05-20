
import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon } from "mdbreact";
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  {
    allStrapiFooters {
      nodes {
        bg_color {
          color
          id
        }
        font_color {
          color
          id
        }
        font_family {
          family
          id
        }
        font_size {
          size
          id
        }
        menu {
          font_stack
          id
        }
        title
      }
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiFooters: { nodes: footer },
  } = data
  console.log(data)
  const {
    bg_color,
    font_color,
    font_family,
    font_size,
    menu,
    title,
  } = footer[0]
  return (
   <MDBFooter style={{
            backgroundColor: bg_color.color,
          }} className="font-small pt-0">
          <MDBContainer>
              <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
              {menu.map(
                        (item, index1) => (
                  <MDBCol key={item.id} md="2" className="b-3">
                      <h6 className="title font-weight-bold">
                          <a  href="#!" style={{
            color:font_color,fontFamily:font_family.family,fontSize: font_size.size
          }}>{item.font_stack}</a>
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

  )

}

export default Footer;
