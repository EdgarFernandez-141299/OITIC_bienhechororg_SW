import React from 'react'

import '../css/responsive.css';

class Body extends React.Component{
    render(){
        return(
<div class="grid-container">
      <div class="grid-item1">
       <div class="div-imghidden" >
         <img class="img" src={require("../images/im1.jpg")}/>
       </div>
      </div>
    <div class="grid-item2">
      <div class="div-imghidden">
       <img class="img" src={require("../images/vacilica.jpg")}/>
      </div>
    </div>

    <div class="grid-item3">
      <div class="div-imghidden" >
        <img class="img" src={require("../images/im2.jpg")}/>
      </div>
    </div>

  <div class="grid-item4">
    <div class="div-imghidden" >
      <img class="img" src={require("../images/img4.jpg")}/>
    </div>
  </div>

  <div class="grid-item5">
    <div class="div-imghidden" >
      <img class="img" src={require("../images/im3.jpg")}/>
    </div>
  </div>

  <div class="grid-item6">
    <div class="div-imghidden" >
      <img class="img" src={require("../images/im4.jpg")}/>
    </div>
  </div>

  <div class="grid-item7">
    <div class="div-imghidden" >
      <img class="img" src={require("../images/im5.jpg")}/>
    </div>
  </div>

  <div class="grid-item8">
    <div class="div-imghidden" >
      <img class="img" src={require("../images/img1.jpg")}/>
    </div>
  </div>

  <div class="casa">
     <img class="imgcasa" src={require("../images/casita.png")}/>
  </div>


   <div class="grid-item9">
     <div class="div-imghidden" >
      <img class="img" src={require("../images/img1.jpg")}/>
     </div>
   </div>

  <div class="grid-item10">
    <div class="div-imghidden" >
      <img class="img" src={require("../images/img1.jpg")}/>
    </div>
  </div>

  <div class="grid-item11">
    <div class="div-imghidden" >
      <img class="img" src={require("../images/img1.jpg")}/>
    </div>
  </div> 
  </div>

)
}

  }
  export default Body