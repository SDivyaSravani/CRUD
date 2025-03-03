import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import Read from './Read'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User/>}></Route>
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/update/:id" element={<UpdateUser />}></Route>
          <Route path="/read/:id" element={<Read />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
