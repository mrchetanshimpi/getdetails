
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Categories from './components/Categories.jsx'
import Navbar from './components/Navbar.jsx'
import Searchbar from './components/Searchbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
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
