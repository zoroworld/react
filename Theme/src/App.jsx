import { useState } from 'react'
import './App.css'


function App() {
  
  const[isToggle, SetIsToggle] = useState(false);

  
  function handleTogglButton(e){
    SetIsToggle(!isToggle)
    console.log(e.target.className);
    let target = e.target.className;
    let result = target == 'white'? 'white' : 'Black';
    const rootElement = document.documentElement;
    rootElement.style.backgroundColor = result;
  }

  return (
    <>
      <div>
          {
             isToggle?(<>
                <button className='white' onClick={handleTogglButton}>White</button>
             </>):(
              <>
                <button className='black'  onClick={handleTogglButton}>Black</button>
              </>
             )
          }
      </div>
    </>
  )
}

export default App
