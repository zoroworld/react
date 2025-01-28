import { Route, Routes } from 'react-router'
import Home from '../../Home'
import About from '../../About'

function ShowCase(){
    return(<>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>} />
        </Routes>
    </>)
}


export default ShowCase