import React, { useState } from 'react'
import Label from '../Label/Label'


const Form = () => {

    const [formsData,setFormData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        message:'',

    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData({
            ...formsData,
            [name]:value
        })

    }


    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formsData)
        setFormData({
            firstName:" ",
            lastName:'',
            email:'',
            message:'',
        })
       
    }
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    // const handleSubmit = (e) => {
       
       
    //     const formData = (firstName, lastName, email, message)
    //     e.preventDefaultValues();
    //     console.log(formData)
    //     setFirstName = ("")
    //     setLastName = ("")
    //     setEmail = ("")
    //     setMessage = ("")
    // }
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 '>
                    <h3 className='text-black text-center'>USER REGISTRATION FORM</h3>
                    <form onSubmit={handleSubmit}>
                        <Label title="FirstName" />
                        <input type='text' className='form-control' name='firstName' value={formsData.firstName} onChange={handleChange} />

                        <Label title="Last Name" />
                        <input type='text' className='form-control'name='lastName' value={formsData.lastName} onChange={handleChange} />

                        <Label title="Email" />
                        <input type='text' className='form-control'name='email' value={formsData.email} onChange={handleChange} />

                        <Label title="Message" />
                        <textarea className='form-control'name='message' value={formsData.message} onChange={handleChange} />
                        

                        <div>
                            <button className='btn btn-info mt-5'>SUBMIT</button>
                        </div>




                    </form>

                </div>

            </div>

        </div>
    );
};

export default Form;
