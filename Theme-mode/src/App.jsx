

import './App.css'
import NavBar from './component/navBar'
import ShowCase from './component/showPage'
import ThemeProvider from './context/ThemeProvider'



function App() {

  return (
    <>
      <ThemeProvider>
         <NavBar />
         <ShowCase />
      </ThemeProvider>
    </>
  )
}

export default App
