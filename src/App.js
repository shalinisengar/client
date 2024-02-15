import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'

const App = () => {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='home' element={<Home/>}/>

    </Routes>
  
  </div>
  )
}

export default App