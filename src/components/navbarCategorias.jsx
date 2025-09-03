import React, { useRef } from "react";
import { Navbar, Button } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error en NavbarCategorias:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) return <h2>Algo salió mal en el menú de categorías.</h2>;
    return this.props.children;
  }
}

function NavbarCategoriasComponent({ categories = [] }) {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCategoryClick = (cat) => {
    // Navegar a /categoriacomida pasando la categoría seleccionada por estado
    navigate("/categoriacomida", { state: { selectedCategoryId: cat.id } });
  };

  return (
    <Navbar bg="light" className="px-2 py-2 shadow-sm">
      <Button variant="outline-secondary" className="me-2" onClick={() => scroll("left")}>
        <BsChevronLeft />
      </Button>

      <div
        ref={scrollRef}
        className="d-flex flex-row overflow-auto flex-nowrap"
        style={{ scrollBehavior: "smooth" }}
      >
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant="light"
            className="d-flex flex-column align-items-center justify-content-center me-3"
            style={{ minWidth: "80px" }}
            onClick={() => handleCategoryClick(cat)}
          >
            <span style={{ fontSize: "0.8rem" }}>{cat.label}</span>
            <img
              src={cat.img || "https://via.placeholder.com/60x40"}
              alt={cat.label || "Categoría"}
              style={{
                width: "60px",
                height: "40px",
                objectFit: "cover",
                marginTop: "4px",
              }}
            />
          </Button>
        ))}
      </div>

      <Button variant="outline-secondary" className="ms-2" onClick={() => scroll("right")}>
        <BsChevronRight />
      </Button>
    </Navbar>
  );
}

export default function NavbarCategorias(props) {
  return (
    <ErrorBoundary>
      <NavbarCategoriasComponent {...props} />
    </ErrorBoundary>
  );
}
