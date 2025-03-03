import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {

    const {id} = useParams();
    const [name,setName] = useState();
    const [email,setEmail] = useState();

    useEffect(() =>{
        axios.get(`http://localhost:3001/getUser/`+id)
        .then(result =>{
            result.data
        setName(result.data.name);
        setEmail(result.data.email);
    })
        .catch(err => console.log(err))
    },[])

  return (
    <div>
        <div className='d-flex flex-column justify-content-center align-items-center bg-white h-100'>
            <div className='bg-white rounded-2'>
            <h1> READ THE DATA</h1>
            <form>
                    <div className='m-4 d-flex flex-row'>
                        <strong className='me-2'>Name: </strong><span>{name}</span>
                    </div>
                    <div className='m-4 d-flex flex-row'>
                        <strong className='me-2'>Email: </strong><span>{email}</span>
                    </div>
                </form>
                <Link to="/" className="btn btn-primary m-4">Back</Link>
            </div>
        </div>
    </div>
  )
}

export default Read