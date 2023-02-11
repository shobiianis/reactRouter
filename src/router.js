import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';


function AppRouting(){
     return(


<BrowserRouter>
<Routes>
    <Route path='/' element={<Home   />}/>
    <Route path='about' element={<About   />}/>
</Routes>
</BrowserRouter>


     )

}


export default AppRouting;