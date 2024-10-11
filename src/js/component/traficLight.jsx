import React, {useState} from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("yellow");
    return (
            <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="bg-dark mx-auto" style={{width:"25px", height:"150px"}}></div>
            <div className="bg-dark mx-auto rounded-5 justify-content-evenly d-flex flex-column align-items-center" style={{width:"200px", height:"400px"}}>
                <div onClick={()=>{
            setColor("red")
    }} className={"bg-danger rounded-circle " + (color=="red" ? "onLightRed" : "")}  style={{width:"100px", height:"100px"}}></div>
                <div onClick={()=>{
            setColor("yellow")
    }} className={"bg-warning rounded-circle " + (color=="yellow" ? "onLightYellow" : "")} style={{width:"100px", height:"100px"}}></div>
                <div onClick={()=>{
            setColor("green")
    }} className={"bg-success rounded-circle " + (color=="green" ? "onLightGreen" : "")} style={{width:"100px", height:"100px"}}></div>
            </div>
            </div>

    );
};

export default TrafficLight;

