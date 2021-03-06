import React from 'react'
import './board.css'
import ReactMarkdown from 'react-markdown'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import { MDBBtn, MDBIcon } from 'mdbreact'

const Event = ({
  id,
  description,
  image,
  slug,
  font_family,
  font_color,
  title,
  title_align,
  content_align,
}) => {
  return (
    <>
      <div className="col-md-6">
        <Link to={`/board/${slug}`} key={id}>
          <div className="team-player">
            <h3 style={{ textAlign: title_align }}> {title}</h3>
            {image && image.childImageSharp.fluid && (
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
        </Link>
      </div>
    </>
  )
}

export default Event
