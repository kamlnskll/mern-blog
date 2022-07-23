import Home from './pages/Home'
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom'
import Post from './pages/Post.jsx'

function App() {
  const { id } = useParams()
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<Post id={id} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
