import Home from './pages/Home'
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom'
import Post from './pages/Post.jsx'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './components/Footer'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const { id } = useParams()
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<Post id={id} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
