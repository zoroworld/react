import { useTheme } from "./context/ThemeProvider";


function About(){
  const {theme } = useTheme();
    
    return(<>
      <div
       style={{
        background: theme === 'dark' ? "black":'white',
        width:"100%",
        height:"100vh"
       }}
      >
      <h1 style={{color: theme === 'light' ? "black":'white'}}>About</h1>
      </div>
    </>)
}


export default About;