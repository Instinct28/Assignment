import { useState } from "react";
import React from "react";
import { Button } from "reactstrap";

function Intro() {
    const [showCard, setShowCard] = useState(false);

    const toggleCard = () => {
    setShowCard(!showCard);
    }

  return(
    <div style={{marginTop:'20px'}}>
        <div>
            <h3> Welcome Shrikant</h3>
            <p>Uplode Your audio and vedio to convert to text</p>
        </div>
        <div>
            <Button onClick={toggleCard} color="primary" style={{float: 'right', marginTop: '-20px', marginRight: '30px'}} className="float-right" > Transcribe File</Button>
        </div> 
    </div>
  )

}

export default Intro;