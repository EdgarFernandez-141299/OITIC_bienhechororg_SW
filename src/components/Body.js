import React from 'react'
import '../css/responsive.css';
import QuienesSomosModal from '../components/ModalQS'


class Body extends React.Component{  
  
    render(){  
        return(
          
          <div class="grid-container">
              <QuienesSomosModal />

                    <div class="grid-item2">
                      <div class="div-imghidden">
                      <img class="img" src={require("../images/vacilica.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div class="grid-item3">
                      <div class="div-imghidden" >
                        <img class="img" src={require("../images/im2.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div class="grid-item4">
                      <div class="div-imghidden" >
                        <img class="img" src={require("../images/img4.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div class="grid-item5">
                      <div class="div-imghidden" >
                        <img class="img" src={require("../images/im3.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div class="grid-item6">
                      <div class="div-imghidden" >
                        <img class="img" src={require("../images/im4.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div class="grid-item7">
                      <div class="div-imghidden" >
                        <img class="img" src={require("../images/im5.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div class="grid-item8">
                      <div class="div-imghidden" >
                        <img class="img" src={require("../images/img1.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div class="casa">
                      <img class="imgcasa" src={require("../images/casita.png")} alt="imagen"/>
                    </div>


                    <div class="grid-item9">
                      <div class="div-imghidden" >
                        <img class="img" src={require("../images/img1.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div class="grid-item10">
                      <div class="div-imghidden" >
                        <img class="img" src={require("../images/img1.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div class="grid-item11">
                      <div class="div-imghidden" >
                        <img class="img" src={require("../images/img1.jpg")} alt="imagen"/>
                      </div>
                    </div> 
            </div>

        )
      }
  }

  export default Body