import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router'
import { HomePage } from './pages/homePage'
import { LoginPage } from './pages/loginPage'
import { CategoriacomidaPage } from './pages/categoriacomidaPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/categoriacomida" element={<CategoriacomidaPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
