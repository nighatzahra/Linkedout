import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Companies from './pages/Companies'
import CompanyProfile from './pages/CompanyProfile'
import WriteReview from './pages/WriteReview'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/company/:id" element={<CompanyProfile />} />
        <Route path="/write-review" element={<WriteReview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App