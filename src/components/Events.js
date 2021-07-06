import React from 'react'
import './board.css'
import member1 from '../images/boardMembers/President_boarstara.jpg'
import member2 from '../images/boardMembers/boardheidi2.jpg'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Event from './Event'

import Board from './Board'

export const Events = ({ events, title, showLink }) => {
  return (
    <div className="box center">
      <h2 className="heading">{title}</h2>
      <div className="box center">
        <div className="container">
          <div className="row">
            {events.map((event, index) => {
              return <Event key={index} {...event} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Events
