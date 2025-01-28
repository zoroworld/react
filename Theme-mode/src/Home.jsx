import { useTheme } from "./context/ThemeProvider";


function Home(){
    const {theme } = useTheme();
    
    return(
    <>
      <div
      style={{
        background: theme === 'dark' ? "black":'white',
        width:"100%",
        height:"100vh"
      }}
      >
         <h1 style={{color: theme === 'light'? "black":'light'}}>Home</h1>
      </div>
    </>
    )
}

export default Home