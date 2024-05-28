import React,{useState} from 'react'

const Quiz = () => {
 
  
  const [color, setcolor] = useState("black")
  const changecolor1 =(color)=>{
      setcolor(color)
  
  }
  const changecolor2 =(color)=>{
    setcolor(color)
  }
  const [IsYes, setIsYes] = useState("true")
  const change =()=>{
      setIsYes(!IsYes)
  }
  
 


  
  

  return (
    <div className='container mt-5 text-center mb-5'>
      <p>QUESTION 1</p>
      <h2>Which is the purpose of JavaScript?</h2>
      <p>Ans 1</p>
      <button style={{ color: color }}className='mt-4 'onClick={() => changecolor1("red")}>To style HTML pages</button>

       <br /> <br />
      <p>Ans 2</p>
      <button style={{ color: color }}className='mt-4 'onClick={() => changecolor2("green")}>To add interactivity to HTML pages</button>

      
    </div>
 
  )
}

export default Quiz




