import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { useEffect } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")


  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  //Actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")

    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])


  return (
    <>
      <h1 className='bg-blue-800 text-white p-4 text-3xl'>Context API</h1>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />

            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />


            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
