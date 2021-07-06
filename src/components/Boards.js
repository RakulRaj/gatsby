
import React from "react";
import "./board.css";
import member1 from "../images/boardMembers/President_boarstara.jpg";
import member2 from "../images/boardMembers/boardheidi2.jpg";
import { useStaticQuery, graphql,Link } from "gatsby"

import Board from "./Board"
const baseUrl="https://strapy-iowa.herokuapp.com"

export const BoardMembers = ({members,title,showLink})=>{
   return (
   <div className="box center">
           <h2 className="heading">{title}</h2>
           <div className="box center">
            <h2 className="heading">Board Members</h2>
            <div className="container">
              <div className="row">
            {members.map((member,index) => {
            return <Board key={index} {...member}/>
            }
            )}
            </div>
            </div>
            </div>
            </div>

            )
          }
          export default BoardMembers
