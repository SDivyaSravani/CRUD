import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {

    const {id} = useParams();
    const [name,setName] = useState();
    const [email,setEmail] = useState();

     const navigate = useNavigate();

    useEffect(() =>{
        axios.get(`http://localhost:3001/getUser/`+id)
        .then(result =>{
            console.log(result.data)
        setName(result.data.name);
        setEmail(result.data.email);
    })
        .catch(err => console.log(err))
    },[])

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id,{name,email})
        .then(result => console.log(result.data))
        .catch(err => console.log(err))
        navigate("/");
    }
    
  return (
    <div>
        <div className='d-flex flex-column justify-content-center align-items-center bg-white h-100'>
            <div className='bg-white rounded-2'>
            <h1> UPDATE THE DATA</h1>
            <form onSubmit={Update}>
                    <div className='m-4 d-flex flex-row'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' className='form-control ms-2' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='m-4 d-flex flex-row'>
                        <label htmlFor='name'>Email:</label>
                        <input type='text' className='form-control ms-2' placeholder='Email' value={email} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <button className='btn btn-success m-4'>Submit</button>
                        <Link to="/" className="btn btn-primary m-4">Back</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UpdateUser