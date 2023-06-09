
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link,Routes,Route} from 'react-router-dom';
import Home  from './Pages/Home';
import Login  from './Pages/Login';
import Dashboard  from './Pages/Dashboard';
import Edituser from './Pages/Edituser';
import Register from './Pages/Register';
import Logout from './Pages/Logout';

function App() {

  return (
  <div>
       <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
          <ul className='navbar-nav'>
            <li className='nav-item'><Link to={'/'} className='nav-link'>Home</Link></li>
            <li className='nav-item'><Link to={'/login'} className='nav-link'>Login</Link></li>
            <li className='nav-item'><Link to={'/dashboard'} className='nav-link'>Dashboard</Link></li>
            <li className='nav-item'><Link to={'/register'} className='nav-link'>Registration</Link></li>
            <li className='nav-item'><Link to={'/logout'} className='nav-link'>Logout</Link></li>

            {/*<Link to={'/register'} className='nav-link'>Register</Link> */}

          </ul>
       </nav>
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/logout' element={<Logout />}/>

          <Route path='/users/:id/edit' element={<Edituser />}/>
      
       </Routes>
  </div>

  )
}

export default App
