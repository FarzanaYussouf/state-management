import React, { useState } from 'react'
import "./Shopping.css"
import { items } from "../data"
const Shopping = () => {
    const [count, setcount] = useState(1)
    const Addition = () => {
        setcount(count + 1)
    }
    const Subtraction = () => {
        setcount(count - 1)
    }

    const Multiply = () => {
        setcount(count * 1000)
    }
    const [count2, setcount2] = useState(1)
    const Addition2 = () => {
        setcount2(count2 + 1)
    }
    const Subtraction2 = () => {
        setcount2(count2 - 1)
    }

    const Multiply2 = () => {
        setcount2(count2 * 3000)
    }
    const [count3, setcount3] = useState(1)
    const Addition3 = () => {
        setcount3(count3 + 1)
    }
    const Subtraction3 = () => {
        setcount3(count3 - 1)
    }

    const Multiply3 = () => {
        setcount3(count3 * 1000)
    }
    const [count4, setcount4] = useState(1)
    const Addition4 = () => {
        setcount4(count4 + 1)
    }
    const Subtraction4 = () => {
        setcount4(count4 - 1)
    }

    const Multiply4 = () => {
        setcount4(count4 * 1000)
    }
    const [count5, setcount5] = useState(1)
    const Addition5 = () => {
        setcount5(count5 + 1)
    }
    const Subtraction5 = () => {
        setcount5(count5 - 1)
    }

    const Multiply5 = () => {
        setcount5(count5 * 1000)
    }

    return (
        <div className='container mt-5 text-center'>
            <h1 className='mb-4'>My Shopping Cart</h1>
            <div className='row border border-3 px-2 py-3 bg-light first-child'>
                <div className='col-3'>
                    <h6>Product</h6>
                    <hr />

                    <div className='row '>{
                        items.map((item) => (
                            <>
                                <div className='col-6 mt-4'>
                                    <img src={item.img} alt="" />

                                </div>
                                <div className='col-6 mt-3'>

                                    <h6 className=' '>{item.name}</h6>
                                    <h6 className=''>{item.desc1}</h6>
                                    <h6 className=''>{item.desc2}</h6>
                                    <hr />

                                </div>

                            </>
                        )
                        )
                    }
                    </div>

                </div>
                <div className='col-3'>
                    <h6>Price</h6>
                    <hr />

                    <div className='row'>{
                        items.map((item) => (
                            <>
                                <div className='col-12'>

                                    <h5 className='mt-5 mb-5'>{item.price}</h5>


                                </div>
                            </>
                        )
                        )
                    }


                    </div>

                </div>
                <div className='col-3'>
                    <h6>Quantity</h6>
                    <hr />
                    <div className='row mt-5' >
                        <div className='col-12'>
                            <button className='bg-success text-white px-3' onClick={Addition}>+</button>
                            < button className='bg-light  px-4'>{count}</button>

                            <button className='bg-info text-white px-3' onClick={Subtraction}>-</button>


                        </div>

                    </div>
                    <div className='row mt-5 ' >
                        <div className='col-12'>
                            <button className='bg-success text-white px-3 mt-5' onClick={Addition2}>+</button>
                            < button className='bg-light  px-4'>{count2}</button>

                            <button className='bg-info text-white px-3' onClick={Subtraction2}>-</button>


                        </div>

                    </div>
                    <div className='row mt-5' >
                        <div className='col-12'>
                            <button className='bg-success mt-5 text-white px-3' onClick={Addition3}>+</button>
                            < button className='bg-light  px-4'>{count3}</button>

                            <button className='bg-info text-white px-3' onClick={Subtraction3}>-</button>


                        </div>

                    </div>
                    <div className='row mt-5' >
                        <div className='col-12'>
                            <button className='bg-success text-white mt-5 px-3' onClick={Addition4}>+</button>
                            < button className='bg-light  px-4'>{count4}</button>

                            <button className='bg-info text-white px-3' onClick={Subtraction4}>-</button>


                        </div>

                    </div>
                    <div className='row mt-5' >
                        <div className='col-12'>
                            <button className='bg-success text-white mt-5 px-3' onClick={Addition5}>+</button>
                            < button className='bg-light  px-4'>{count5}</button>

                            <button className='bg-info text-white px-3' onClick={Subtraction5}>-</button>


                        </div>

                    </div>

                </div>
                <div className='col-3'>
                    <h6>Total</h6>
                    <hr />

                    <div className='row mt-5'>
                        <div className='col-12'>
                            <h4 className='mb-5'>{count * 1000}</h4>




                        </div>

                    </div>
                    <div className='row mt-5'>
                        <div className='col-12 mb-5'>
                            <h4>{count2 * 3000}</h4>




                        </div>

                    </div>
                    <div className='row mt-5'>
                        <div className='col-12'>
                            <h4 className='mb-5'>{count3 * 4500}</h4>




                        </div>

                    </div>
                    <div className='row mt-5'>
                        <div className='col-12'>
                            <h4 className='mb-5'>{count4 * 5500}</h4>




                        </div>

                    </div>
                    <div className='row mt-5'>
                        <div className='col-12'>
                            <h4 className='mb-5'>{count5 * 8000}</h4>




                        </div>

                    </div>


                </div>

            </div>


        </div>
    )
}

export default Shopping
