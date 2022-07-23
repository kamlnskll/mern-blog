import Home from './pages/Home'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Post from './pages/Post.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:postId' element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
