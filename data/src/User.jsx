import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const User = () => {

    const [users,setUser] = useState([])

    useEffect(() =>{
        axios.get("http://localhost:3001")
        .then(result =>setUser(result.data))
        .catch(err => console.log(err))
    },[])

    const handelDelete = (id) => {
        axios.delete("http://localhost:3001/deleteUser/"+id)
        .then(result => {console.log(result)
            window.location.reload()})
        .catch(err => console.log(err))
    }
    

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-white h-100'>
        <h1>List of Data</h1>
        <div className='vw-75 rounded bg-white shadow p-3'>
            <div className='d-flex justify-content-end'>
                <Link to="/create" className='btn btn-success'>ADD +</Link>
            </div>
            
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                        users.map(user => {
                            return <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link to={`/read/${user._id}`} className='btn btn-sm btn-info p-2 m-2'>Read</Link>
                                            <Link to={`/update/${user._id}`} className='btn btn-warning m-2'>Update</Link>
                                            <button className='btn btn-danger m-2' onClick={(e) =>handelDelete(user._id)}>Delete</button>
                                        </td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
            
        </div>
    </div>
  )
}

export default User