import React ,{ useState, useEffect } from "react";
import { Router } from "@reach/router";
import {withRouter} from 'react-router-dom';
import CollegeDetails from "./CollegeDetails";
import CollegeList from "./CollegeList";
import StudentInfo from "./StudentInfo";
import "./css.css";

export default function RightSection() {
const [show,setshow]=useState(true);
  const currentURL = window.location.pathname;
  console.log(show);
  useEffect(()=> {
      if(currentURL=== "/")
      setshow(true);
      else
      setshow(false);
  });


  return (
    <div
      style={{
        width: window.innerWidth <= 500 ? "90%" : "50%",
        margin: "auto",
        height: "90vh",
        backgroundcolor: "black",
      }}
    >
 <div  className={show ? "" : "hide"} >
<p
style={{
        
        backgroundColor: "#2F5D62",
        color:"white",
        textAlign:"center",
        fontSize:"34px",
        padding:"10px"
      }}
      > I'm Gautami Mehta</p>
 <p 
 style={{
        
        backgroundColor: "#2F5D62",
        color:"white",
        textAlign:"justify",
        fontSize:"24px",
        // marginRight:"10px",
        padding:"10px"
      }}
      >
      The following technologies have been used for the configuration of the website
      <ol> 
      <li>
        React
      </li>
      <li>
      Node.JS
      </li>
      <li>
      MongoDB
      </li>
      
      </ol>
  I created some mock fake data with 100 colleges and 100 students in each college. And created pie charts in form of cards
  of States and 
  Courses by installing node modules like antd, @nivo/pie, @reach/router, etc.
 </p><p
 style={{
        
        backgroundColor: "#2F5D62",
        color:"white",
        textAlign:"justify",
        fontSize:"24px",
        // marginRight:"10px",
        padding:"10px"
      }}
 >Some of the major modules used are
 <ul>
   <li>
   React
   </li>
   <li>
   @reach/router
   </li>
   <li>
   react-dom
   </li>
   

 </ul></p>
 </div>
      <Router>
        <CollegeList path="list/:type" />
        <CollegeDetails path="college_details" />
        <StudentInfo path="student_details" />
      </Router>
    </div>
  );
}