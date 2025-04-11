
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Categories from './pages/Categories.jsx'
import Navbar from './components/Navbar.jsx'
import Searchbar from './components/Searchbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/services"} element={<Services />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/categories"} element={<Categories />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/search"} element={<Searchbar />} />
      </Routes>
    </div>
  )
}

export default App
