import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function Btn() {

  const {theme, light, dark} = useContext(ThemeContext)

  const handleChange = (e) => {
    if(e.currentTarget.checked){
      dark()
    } else {
      light()
    }
  }

  return (
    <label htmlFor='switch' className='flex border-gray-400 shadow-xl shadow-gray-300 border-2 items-center justify-around w-[30vw] border rounded-lg my-4 dark:shadow-gray-500 bg-gray-50 p-6 dark:bg-gray-800 dark:text-white dark:border-white'>
      <div className='flex space-x-2'>
        <input 
        type="checkbox"
         id='switch' 
         onChange={handleChange}
        //  checked={}
        />
        <div>
            Dark : {theme}
        </div>
      </div>
      <h1 className='font-bold text-1xl '>Switch Theme</h1>
    </label>
  )
}

export default Btn
