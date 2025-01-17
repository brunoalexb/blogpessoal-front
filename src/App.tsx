import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/navbar/footer/Footer'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Cadastro from './pages/home/cadastro/Cadastro'
import Login from './pages/home/login/Login'
import './App.css'

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
