import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from 'gatsby-image'
import { MDBBtn, MDBIcon } from 'mdbreact'

const ComponentName = ({ data }) => {
  const {
    id,
    description,
    image,
    slug,
    font_family,
    font_color,
    title,
    title_align,
    content_align,
  } = data.blog
  return (
    <Layout>
      <SEO title={slug} />

      <div className="box center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="team-player">
                <h3 style={{ textAlign: title_align, color: font_color.color }}>
                  {' '}
                  {title}
                </h3>
                {image && (
                  <Image
                    fluid={image.childImageSharp.fluid}
                    className="img-fluid img-raised"
                  />
                )}

                <ul className="ListStyle">
                  {description.map((desc, index) => (
                    <li style={{ listStyle: content_align }} key={desc.id}>
                      {desc.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleEvents($slug: String) {
    blog: strapiEvents(slug: { eq: $slug }) {
      title
      id
      content_align
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
