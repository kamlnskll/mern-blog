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

function App() {

  const { user } = useAuthContext()
  const { id } = useParams()
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={user ? <Home /> : <Login />} />
        <Route path='/posts/:id' element={user ? <Post id={id} /> : <Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin' element={user ? <Admin /> : <Login />} />
        <Route path='/login' element={!user ? <Login /> : <Home />} />
        <Route path='/register' element={!user ? <Register /> : <Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
