import React from 'react'
import '../css/responsive.css';
import QuienesSomosModal from '../components/ModalQS'


class Body extends React.Component{  
  
    render(){  
        return(
          
          <div className="grid-container">
              <QuienesSomosModal />

                    <div className="grid-item2">
                      <div className="div-imghidden">
                      <img className="img" src={require("../images/vacilica.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div className="grid-item3">
                      <div className="div-imghidden" >
                        <img className="img" src={require("../images/im2.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div className="grid-item4">
                      <div className="div-imghidden" >
                        <img className="img" src={require("../images/img4.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div className="grid-item5">
                      <div className="div-imghidden" >
                        <img className="img" src={require("../images/im3.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div className="grid-item6">
                      <div className="div-imghidden" >
                        <img className="img" src={require("../images/im4.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div className="grid-item7">
                      <div className="div-imghidden" >
                        <img className="img" src={require("../images/im5.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div className="grid-item8">
                      <div className="div-imghidden" >
                        <img className="img" src={require("../images/img1.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div className="casa">
                      <img className="imgcasa" src={require("../images/casita.png")} alt="imagen"/>
                    </div>


                    <div className="grid-item9">
                      <div className="div-imghidden" >
                        <img className="img" src={require("../images/img1.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div className="grid-item10">
                      <div className="div-imghidden" >
                        <img className="img" src={require("../images/img1.jpg")} alt="imagen"/>
                      </div>
                    </div>

                    <div className="grid-item11">
                      <div className="div-imghidden" >
                        <img className="img" src={require("../images/img1.jpg")} alt="imagen"/>
                      </div>
                    </div> 
            </div>

        )
      }
  }

  export default Body