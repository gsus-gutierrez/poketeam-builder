import React from "react"
import ProgressBar from "react-bootstrap/ProgressBar"

function StatBar(props){
    console.log(props)
    return (
            <ProgressBar  
            className="progress-bar"
            variant= {props.stats < 50 ? "danger" : props.stats <80 ? "warning" : "success"}
            now={props.stats} 
            max={150}
            animated="true"
            />
        
    )
}

export default StatBar