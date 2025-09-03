import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavbarCategorias from "../components/navbarCategorias";
import { FooterComponent } from "../components/footerComponent";

export const CategoriacomidaPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const location = useLocation(); // leer estado de navegación

  useEffect(() => {
    const saved = localStorage.getItem("categories");
    if (saved) setCategories(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (categories.length && location.state?.selectedCategoryId) {
      const cat = categories.find((c) => c.id === location.state.selectedCategoryId);
      setSelectedCategory(cat);
    }
  }, [location.state, categories]);

  return (
    <div>
      <NavbarCategorias categories={categories} />

      <div className="p-4">
        {selectedCategory ? (
          <div>
            <h2>{selectedCategory.label}</h2>
            <img
              src={selectedCategory.img || "https://via.placeholder.com/300x200"}
              alt={selectedCategory.label}
              style={{ width: "300px", height: "200px", objectFit: "cover" }}
            />
            <p>Aquí podés mostrar los productos o información de esta categoría.</p>
          </div>
        ) : (
          <h3>Selecciona una categoría del menú para ver su contenido</h3>
        )}
      </div>

      <FooterComponent />
    </div>
  );
};
