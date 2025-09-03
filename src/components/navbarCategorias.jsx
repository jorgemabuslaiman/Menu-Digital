import { useRef } from "react";
import { Navbar, Button } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight, BsGift, BsCupStraw,} from "react-icons/bs";
import { FaPizzaSlice } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { PiBowlFood } from "react-icons/pi";

const categories = [
  { id: "promo", label: "Promo", icon: <BsGift /> },
  { id: "hamburguesas", label: "Hamburguesas", icon: <IoFastFood /> },
  { id: "pizzas", label: "Pizzas", icon: <FaPizzaSlice /> }, // 👈 corregido
  { id: "pastas", label: "Pastas", icon: <PiBowlFood /> },
  { id: "bebidas", label: "Bebidas", icon: <BsCupStraw /> },
];

function NavbarCategorias() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Navbar bg="light" className="px-2 py-2 shadow-sm">
      <Button
        variant="outline-secondary"
        className="me-2"
        onClick={() => scroll("left")}
      >
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
          >
            <span style={{ fontSize: "1.2rem" }}>{cat.icon}</span>
            <span style={{ fontSize: "0.8rem" }}>{cat.label}</span>
          </Button>
        ))}
      </div>

      <Button
        variant="outline-secondary"
        className="ms-2"
        onClick={() => scroll("right")}
      >
        <BsChevronRight />
      </Button>
    </Navbar>
  );
}

export default NavbarCategorias;
