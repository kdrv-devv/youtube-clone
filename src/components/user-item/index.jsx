import React from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../../hooks/useAxios'

const UserItem = () => {
  const {id} = useParams()
  const {data,loadnig,error} = useAxios({url:`users/${id}`})

  return (
    <div>
      {loadnig ? "Loading.." : <pre>{JSON.stringify(data,null,4)}</pre>}
    </div>
  )
}

export default UserItem