import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

function GitHub() {
  const data = useLoaderData()

  // console.log(data);

  return (
    <div className='flex flex-wrap items-center w-full p-10 text-2xl text-white bg-gray-600 justify-evenly '>
      <img src={data.avatar_url} alt="" />
      <div className='items-baseline '>
        <h1 className='text-3xl '>Name : {data.name}</h1>
        <h1 className='text-3xl '>User : {data.login}</h1>
        <h1 className='text-3xl '>Followers : {data.followers}</h1>
        <h1 className='text-3xl '>updated_at : {data.updated_at}</h1>
      </div>
    </div>
  )
}

export const getProfileInfo = async () => {
  try {
    const response = await axios.get('https://api.github.com/users/LokeshAlli21');
    return response.data
  } catch (err) {
    console.log('error fetching github profile data', err.stack);
  }
  return
}

export default GitHub;
