import React from 'react'
import { HeaderComponent } from '../components/headerComponent'
import NavbarCategorias from '../components/navbarCategorias'
import { FooterComponent } from '../components/footerComponent'

export const HomePage = () => {
  return (
    <div>
      <HeaderComponent/>
      <NavbarCategorias/>
      <FooterComponent/>
    </div>
  )
}
