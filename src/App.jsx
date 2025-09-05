//lo que hace esta apliacion web en react es la de gestionar un sistema de pedidos de comida

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router'
import { HomePage } from './pages/homePage'
import { LoginPage } from './pages/loginPage'
import { CategoriacomidaPage } from './pages/categoriacomidaPage'
import { PedidoPage } from './pages/pedidoPage'
import { ErrorPage } from './pages/errorPage'
import {DashboardadminPage} from './pages/dashboardadminPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/categoriacomida" element={<CategoriacomidaPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path='/dashboardadmin' element={<DashboardadminPage/>}/>
          <Route path="/pedido" element={<PedidoPage/>}/>
          <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
