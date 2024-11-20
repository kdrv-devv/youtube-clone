import React from 'react'
import useAxios from '../../hooks/useAxios'
import { Link } from 'react-router-dom'

const Users = () => {

    const {data,loading,error} = useAxios({url:"users"})
    
  return (
    <div>
        <table border={"1"} >
            <thead>

           <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Id</th>
           </tr>    
           </thead>

           {data.map((item) =>
            <tr key={item.id}>
                <td><Link to={`/users/${item.id}`}>{item.name}</Link></td>
                <td>{item.username}</td>
                <td><a href={`mailto:${item.email}`}>{item.email}</a></td>
                <td>{item.id}</td>
            </tr>
        )}
            


        </table>
    </div>
  )
}

export default Users