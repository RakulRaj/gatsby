import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import { MDBBtn, MDBIcon } from 'mdbreact'


const ComponentName = ({ data }) => {
  debugger;
  console.log("boardData",data)
  const { id,description, image, slug, font_family,font_color,title ,title_align } = data.blog;
  debugger


  return (
    <Layout>
      <SEO title={slug} />

      <div className="col-md-12">
        <Link to={`/board/${slug}`} key={id}>

          <div className="team-player">
          <h3 style={{textAlign:title_align}}> {title}</h3>
            {image && (
              <Image
                fluid={image.childImageSharp.fluid}
                className="img-fluid img-raised"
              />
            )}

<ul className="ListStyle">
              {description.map((desc, index) => (
                <li
               key={desc.id}>
                  <MDBIcon icon="angle-double-right" size="lg" />
                  {desc.description}
                </li>
              ))}
            </ul>
          </div>
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`

  query GetSingleEvents($slug: String) {
    blog: strapiEvents(slug: { eq: $slug }) {
      title
      id
      description {
        description
        id
      }
      font_family {
        id
        family
      }
      font_color {
        color
        id
      }
      slug
      updated_at
      title_align
      created_at(formatString: "MM Do, YYYY")
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default ComponentName
