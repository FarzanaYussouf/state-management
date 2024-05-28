import React, { useState } from "react"
const Bulb = () => {
    const [IsOn, setIsOn] = useState(true)
    const Switch = () => {
        setIsOn(!IsOn)
    }
    const [color, setcolor] = useState("black")
    const changecolor =(color)=>{
        setcolor(color)
    
    }
    const [count, setcount] = useState(2)
    const Multiply = () => {
        setcount(count * 3)
    }

    const Addition = () => {
        setcount(count + 1)
    }
    const Subtraction = () => {
        setcount(count - 2)
    }

    const [IsYes, setIsYes] = useState(true)
    const change = () => {
        setIsYes(!IsYes)
    }

    return (
        <>
            <div className="text-center mt-5">
                <img src={IsOn ? "images/bulbon.jfif" : "images/bulb off.jfif"} alt="" /> <br />
                <button1 className="btn btn-info mt-4 mb-5" onClick={Switch}>{IsOn ? "BULB OFF" : "BULB ON"}</button1>
            </div>

            <div className="text-center mt-5">
                <h1 style={{ color: color }}>MY NAME IS ZUHAIR YUSSOUF</h1>
                <button className=" btn btn-danger mb-5 mt-3 mx-3 " onClick={() => changecolor("red")}>RED</button>
                <button className="btn btn-primary mx-3 mb-5 mt-3 " onClick={() => changecolor("blue")}>BLUE</button>
                <button className="btn btn-success mt-3 mb-5 mx-3" onClick={() => changecolor("green")}>GREEN</button>
                <button className="btn btn-warning mb-5 mx-3 mt-3" onClick={() => changecolor("yellow")}>YELLOW</button>
            </div>

            <div className="text-center mt-5">
                <h1>{count}</h1>
                <button className="btn btn-secondary mx-3 mt-3 mb-4" onClick={Multiply}>X</button>
                <button className="btn btn-info mt-3 mb-4 mx-3" onClick={Addition}>+</button>
                <button className="btn btn-warning mt-3 mb-4 mx-3" onClick={Subtraction}>-</button>
            </div>

            <div className=" text-center mt-5 mb-5">
                <h1>WEATHER APP</h1>
                <div class="input-group mt-5 mb-3 col-4 mx-5">
                    <input type="text" class="form-control " placeholder={IsYes ? "Abbottabad" : "Lahore"} aria-label={IsYes ? "Abbottabad" : "Lahore"} aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary text-white bg-info" type="button" id="button-addon2" onClick={change}>{IsYes ? "Abbottabad" : "Lahore"}</button>
                </div>
                <h3>{IsYes ? "Lahore" : "Abbottabad"}</h3>
                <p>{IsYes ? "few clouds" : "thunderstorm"} <br />
                    {IsYes ? "Temperature ; 38.65" : "Temperature ; 18"}
                </p>

            </div>
        </>

    )
}

export default Bulb