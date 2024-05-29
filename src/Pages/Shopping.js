import React,{useState} from 'react'
import "./Shopping.css"
const Shopping = () => {
    const [count, setcount] = useState(1)
    const Addition = () => {
        setcount(count + 1)
    }
    const Subtraction = () => {
        setcount(count - 1)
    }
    
    const Multiply = () => {
        setcount(count * 1000 )
    }

  return (
    <div className='container mt-5 text-center'>
        <h1 className='mb-4'>My Shopping Cart</h1>
        <div className='row border border-3 px-2 py-3 bg-light first-child'>
            <div className='col-3'>
                <h6>Product</h6>
                <hr />
              
                <div className='row mt-5'>
                    <div className='col-6'>
                    <img src="/images/chair.jfif" alt="" />
                    </div>
         <div className='col-6'>
                       
<h6>Woodenchair</h6>
<h6>size: small</h6>
<h6>color: white</h6>
</div>      
</div>

            </div>
            <div className='col-3'>
                <h6>Price</h6>
                <hr />
                <div className='row'>
                    <div className='col-12'>
                        <h5 className='mt-5'>RS 1000</h5>

                    </div>

                </div>

            </div>
            <div className='col-3'>
                <h6>Quantity</h6>
                <hr />
                <div className='row mt-5' >
                    <div className='col-12'>
                        <button className='bg-success text-white px-3'  onClick={Addition}>+</button>
                       < button className='bg-light  px-4'>{count}</button>
                        
                        <button className='bg-info text-white px-3' onClick={Subtraction}>-</button>


                    </div>

                </div>

            </div>
            <div className='col-3'>
                <h6>Total</h6>
                <hr />
                <div className='row mt-5'>
                    <div className='col-12'>
                        <h4>{count*1000}</h4>
                        



                    </div>

                </div>

            </div>

        </div>
       
      
    </div>
  )
}

export default Shopping
