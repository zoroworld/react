
import { useState } from 'react'
import './App.css'
import WorkTitle from './WorkTitle';

function App() {

  const[title, setTitle] = useState('');
  const [workList, setWorkList] = useState([]);

  function handleTextChange(e){
     setTitle(e.target.value);
  }

  function handleSubmit(){
    setWorkList((prev) => [...workList , title]);
    setTitle('')
  }

  return (
    <>
      <div>
        <h1>TODO LIST</h1>
        <div className='addtextcont'>
            <input type="text" value={title} onChange={(e) => handleTextChange(e)}/>
            <button type='button' className='submit' onClick={handleSubmit}>ADD</button>
        </div>
        <div className='addtextcont'>
        <div>
         {workList.map((item)=>{
          return(<>
            <WorkTitle title={item} workList={workList} setWorkList={setWorkList}></WorkTitle>
          </>)
         })}
        </div>
        </div>
       
      </div>
    </>
  )
}

export default App
