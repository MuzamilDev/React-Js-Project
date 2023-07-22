import React from "react";
import kalm1 from "./Images/kalima1.png"
import kalm2 from "./Images/kalima2.png"
import kalm3 from "./Images/kalima3.png"
import kalm4 from "./Images/kalima4.png"
import kalm5 from "./Images/kalima5.png"
import kalm6 from "./Images/kalima6.png"

function Sixkalmarecitation(props)
{
    return(
        <>
        <div>
        <div className="container">
        <img src={kalm1} alt="" className="IMG1 img-fluid"/>
        <h3>{props.first}</h3>
       </div>
       <hr/>

       <div className="container">
        <img src={kalm2} alt="" className="IMG2 img-fluid"/>
        <h3>{props.second} </h3>
        </div>
        <hr/>

        <div className="container">
        <img src={kalm3} alt="" className="IMG3 img-fluid"/>
        <h3>{props.third}</h3>
        </div>
        <hr></hr>
      

        <div className="container">
        <img src={kalm4} alt="" className="IMG3 img-fluid"/>
        <h5>{props.fourth}</h5>
        </div>
        <hr/>

        <div className="container">
        <img src={kalm5} alt=""className="IMG img-fluid"/>
        <h5>{props.five}</h5>
        </div>
        <hr/>


        <div className="container">
        <img src={kalm6} alt="" className="IMG img-fluid"/>
        <h5>{props.six}</h5>
        </div>
        <hr/>
        </div>
        </>
    )
}
export default Sixkalmarecitation