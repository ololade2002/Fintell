
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Home from './Components/Homepage/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Components/LoginPage/Login'
import Signup from './Components/SignupPage/Signup'

function App() {

  return (
   <BrowserRouter>
   <div className='app'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
