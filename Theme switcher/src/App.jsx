import { createContext, useEffect, useState } from 'react'
import './App.css'
import Btn from './components/Btn'
import Card from './components/Card'

export const ThemeContext = createContext({
  theme: 'light',
  light: () => {},
  dark: () => {},
})

function App() {

  const [theme, setTheme] = useState('light')
  const light = () => {
    // console.log('called light function');
    setTheme('light')
  }
  const dark = () => {
    // console.log('called dark function');
    setTheme('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(theme)
  },[theme])

  return (
    <ThemeContext.Provider value={{theme, light, dark}}>
      <div className='flex flex-col flex-wrap items-center justify-center min-h-screen'>
        <Btn />
        <Card />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
