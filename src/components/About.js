import Comp from "./classComponent"
import React from "react";
class About extends React.Component{

    constructor(props) {
        super(props);
    
        console.log("Parent Constructor");
      }
      componentDidMount() {
        console.log("Parent Component Did Mount");
      }  

   render(){
    console.log ("renderParent");
    return(
    <div>
        <h1>This is the about page of food express</h1>
        <Comp libname = "React" Home ="rourkela"/>
     </div>
    )
  }
};

export default About;