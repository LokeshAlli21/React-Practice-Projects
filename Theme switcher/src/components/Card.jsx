import React from 'react'

function Card() {
  return (
    <div className='flex bg-gray-50 max-w-[30vw] flex-col items-center p-6 border border-gray-400 shadow-xl shadow-gray-300 border-2 rounded-lg dark:bg-gray-800 dark:text-white dark:border-white dark:shadow-gray-500'>
      <img src="https://photographylife.com/wp-content/uploads/2023/05/Nikon-Z8-Official-Samples-00002.jpg" alt="profile-image" />
      <div className='flex-row items-start w-full py-4'>
        <h1 className='text-2xl font-bold'>Profile Info</h1>
        <p className='font-bold '>name.....</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo at consequatur ex! Error aliquam rerum exercitationem ut doloremque voluptas vero voluptatum beatae eligendi commodi, optio culpa qui magni deserunt sit?</p>
      </div>
    </div>
  )
}

export default Card
