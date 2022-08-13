import Home from './pages/Home'
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  useParams,
} from 'react-router-dom'

import { useAuthContext } from './hooks/useAuthContext'
import Post from './pages/Post.jsx'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './components/Footer'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Register from './pages/Register'
import EditPost from './pages/EditPost'
import { useState } from 'react'

function App() {

  // const [isAdmin, setIsAdmin] = useState(false)
  // const admin = localStorage.getItem('isAdmin')
  // if(admin === null || admin === 'false'){
  //   console.log('You are not admin')
  // } else {
  //   setIsAdmin(true)
  // }
  const { user } = useAuthContext()
  const { id } = useParams()

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path='/posts/:id' element={user ? <Post id={id} /> : <Navigate to="/login" />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path='/posts/edit/:id' element={user ? <EditPost id={id}/> : <Navigate to ="/login" />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
