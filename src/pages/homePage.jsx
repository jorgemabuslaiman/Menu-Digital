//aqui lo que se quiere hacer es mostrar las categorias de comida

import React, { useState, useEffect } from "react";
import { HeaderComponent } from "../components/headerComponent";
import NavbarCategorias from "../components/navbarCategorias";
import { FooterComponent } from "../components/footerComponent";

export const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("categories");
    if (saved) setCategories(JSON.parse(saved));
  }, []);

  return (
    <div>
      <HeaderComponent />
      <NavbarCategorias categories={categories} />
      <FooterComponent />
    </div>
  );
};
