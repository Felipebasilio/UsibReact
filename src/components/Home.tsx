import React from 'react';
import * as torno3 from "../assets/torno3.jpeg";
import * as torno1 from "../assets/torno1.jpeg";
import * as tornop from "../assets/tornopolietileno.jpeg";
import * as tornoFresa from "../assets/tornofresa.jpeg";
import * as tornoCNC from "../assets/tornocnc.jpeg";

const radiousDivStyle = { 
  width: "80%",
  height: "300px",
  borderRadius: "21px 21px 0 0"
}
const Home = () => {
  return (
    <>
      <main className="vh-100">
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">USIB</h1>
            <p className="lead fw-normal">A solução perfeita para os casos de usinagem,   fresa e tornearia.</p>
          </div>
          <div className="shadow-sm d-none d-md-block">
            <img alt="Torno 3" src={torno3.default}/>
          </div>
        </div>
      
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center   text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Aço</h2>
            </div>
            <img className="bg-light shadow-sm mx-auto" style={ radiousDivStyle } alt="Torno 1" src={torno1.default}/>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center  overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Plástico</h2>
            </div>
            <img className="bg-light shadow-sm mx-auto" style={ radiousDivStyle } alt="Torno Polietileno" src={tornop.default}/>
            
          </div>
        </div>
        
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center  overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Fresa</h2>
            </div>
            <img className="bg-light shadow-sm mx-auto" style={ radiousDivStyle } alt="Torno fresa" src={tornoFresa.default}/>
          </div>
          <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center   text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">CNC</h2>
            </div>
            <img className="bg-light shadow-sm mx-auto" style={ radiousDivStyle } alt="Torno CNC" src={tornoCNC.default}/>
          </div>
        </div>
      
      
      </main>
    </>


  );
};

export default Home;