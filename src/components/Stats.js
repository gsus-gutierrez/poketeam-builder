import React from "react"
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import StatBar from "./Statbar";

function Stats(props){

    return(
            <div className="stats">
                <p className="statStr">
                    HP 
                    <br></br>
                    Atk 
                    <br></br>
                    Def 
                    <br></br>
                    SpAtk 
                    <br></br>
                    SpDef 
                    <br></br>
                    Speed 
                    <br></br>
                </p>
                <p className="statVal">
                {props.stats[0]}
                <br></br>
                {props.stats[1]}
                <br></br>
                {props.stats[2]}
                <br></br>
                {props.stats[3]}
                <br></br>
                {props.stats[4]}
                <br></br>
                {props.stats[5]}
                <br></br>
                </p>
                <div className="stat-bars">
                    <StatBar className="progress" stats={props.stats[0]} />
                    <StatBar stats={props.stats[1]} />
                    <StatBar stats={props.stats[2]} />
                    <StatBar stats={props.stats[3]} />
                    <StatBar stats={props.stats[4]} />
                    <StatBar stats={props.stats[5]} />
                </div>
                
                
            </div>
        
    )
}

export default Stats