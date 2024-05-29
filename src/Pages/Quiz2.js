import React, { useState } from 'react'
import "./Shopping.css"

const Quiz2 = () => {
    const [backgroundcolor, setbackgroundcolor] = useState("white")
    const changecolor =(backgroundcolor)=>{
        setbackgroundcolor(backgroundcolor)
    }
   

    return (
        <div className='container text-center mt-5'>
            <h1>Quiz App</h1>
            <h4>Which is the Capital of Pakistan?</h4>
            <div className='row q-child'>
                <div className='col-12'>
            <button className='   fs-4  m-4'onClick={() => changecolor("red")}>Lahore</button>
            
            <button className=" m-4 bg-"onClick={() => changecolor("green")}>Islamabad</button>
            <button className=" m-4 bg-"onClick={() => changecolor("red")}>Karachi</button>
            <button className=" m-4 bg-"onClick={() => changecolor("red")}>Multan</button>
            <button className=" m-4 "onClick={() => changecolor("red")}>Abbottabad</button>
            {/* <button className=" bg-"onClick={() => changecolor("red")}>Sahiwal</button> */}
            

            

            

            

            <div>
            <button  style={{backgroundColor:backgroundcolor}}>Answer</button>
            <p className='mt-2'>green is correct answer <br />
            red is wrong answer</p>
            </div>
            </div>
            </div>
            

           


        </div>
    )
}
export default Quiz2


