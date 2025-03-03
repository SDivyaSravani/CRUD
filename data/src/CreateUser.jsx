import axios from 'axios';
import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom';

const CreateUser = () => {

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    

    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser",{name,email})
        .then(result => console.log(result))
        .catch(err => console.log(err))
        navigate("/");
    }

  return (
    <div>
        <div className='d-flex flex-column justify-content-center align-items-center bg-white w-100 h-100'>
            <div className='vw-50 bg-white rounded-2'>
            <h1> ADD NEW DATA</h1>
                <form onSubmit={Submit}>
                    <div className='m-4 d-flex flex-row'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name="name" className='form-control ms-2' placeholder='Name' onChange={e => setName(e.target.value)} />
                    </div>
                    <div className='m-4 d-flex flex-row'>
                        <label htmlFor='name'>Email:</label>
                        <input type='text' name="email" className='form-control ms-2'  placeholder="Email" onChange={e => setEmail(e.target.value)}/>
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

export default CreateUser