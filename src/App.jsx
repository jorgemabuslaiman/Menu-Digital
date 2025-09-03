import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router'
import { HomePage } from './pages/homePage'
import { LoginPage } from './pages/loginPage'
import { CategoriacomidaPage } from './pages/categoriacomidaPage'
import { PedidoPage } from './pages/pedidoPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/categoriacomida" element={<CategoriacomidaPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/pedido" element={<PedidoPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
