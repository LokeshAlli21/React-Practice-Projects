import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='flex items-center justify-center p-6 bg-orange-300'>
      <h1 className='text-3xl '>user : {id?id:'No params specified'}</h1>
    </div>
  )
}

export default User
