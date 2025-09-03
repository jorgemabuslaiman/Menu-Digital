import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col, Card, InputGroup } from "react-bootstrap";

export const CategoriasAdmin = () => {
  // Estado de categorías (persistente en localStorage)
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem("categories");
    return saved ? JSON.parse(saved) : [];
  });

  const [newCat, setNewCat] = useState({ label: "", img: "" });
  const [editingId, setEditingId] = useState(null);
  const [editCat, setEditCat] = useState({ label: "", img: "" });

  // Guardar categorías en localStorage al cambiar
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  // Agregar nueva categoría
  const addCategory = () => {
    if (!newCat.label.trim()) return alert("El nombre de la categoría es obligatorio");

    const newCategory = {
      id: newCat.label.toLowerCase().replace(/\s/g, "-"),
      label: newCat.label,
      img: newCat.img || "https://picsum.photos/200",
    };

    setCategories([...categories, newCategory]);
    setNewCat({ label: "", img: "" });
  };

  // Editar categoría
  const startEdit = (cat) => {
    setEditingId(cat.id);
    setEditCat({ label: cat.label, img: cat.img });
  };

  const saveEdit = (id) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id ? { ...cat, label: editCat.label, img: editCat.img } : cat
      )
    );
    setEditingId(null);
    setEditCat({ label: "", img: "" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditCat({ label: "", img: "" });
  };

  // Eliminar categoría
  const deleteCategory = (id) => {
    setCategories(categories.filter((c) => c.id !== id));
  };

  // Borrar todas las categorías
  const clearAll = () => {
    if (window.confirm("¿Estás seguro que querés borrar todas las categorías?")) {
      setCategories([]);
    }
  };

  return (
    <div className="p-4">
      <h2>Administrar Categorías</h2>

      {/* Formulario agregar */}
      <Row className="mb-4">
        <Col md={4}>
          <Form.Control
            placeholder="Nombre de la categoría"
            value={newCat.label}
            onChange={(e) => setNewCat({ ...newCat, label: e.target.value })}
          />
        </Col>
        <Col md={4}>
          <Form.Control
            placeholder="URL de imagen (opcional)"
            value={newCat.img}
            onChange={(e) => setNewCat({ ...newCat, img: e.target.value })}
          />
        </Col>
        <Col md={4}>
          <Button onClick={addCategory}>Agregar</Button>
          <Button variant="danger" className="ms-2" onClick={clearAll}>
            Borrar todas
          </Button>
        </Col>
      </Row>

      {/* Lista editable */}
      <Row>
        {categories.map((cat) => (
          <Col key={cat.id} xs={12} md={6} lg={4} className="mb-3">
            <Card className="shadow-sm">
              <Card.Body>
                {editingId === cat.id ? (
                  <>
                    <InputGroup className="mb-2">
                      <Form.Control
                        value={editCat.label}
                        onChange={(e) => setEditCat({ ...editCat, label: e.target.value })}
                      />
                    </InputGroup>
                    <InputGroup className="mb-2">
                      <Form.Control
                        value={editCat.img}
                        onChange={(e) => setEditCat({ ...editCat, img: e.target.value })}
                      />
                    </InputGroup>
                    <Button size="sm" variant="success" onClick={() => saveEdit(cat.id)}>
                      Guardar
                    </Button>
                    <Button size="sm" variant="secondary" className="ms-2" onClick={cancelEdit}>
                      Cancelar
                    </Button>
                  </>
                ) : (
                  <>
                    <Card.Img
                      variant="top"
                      src={cat.img || "https://via.placeholder.com/120"}
                      style={{ height: "120px", objectFit: "cover" }}
                    />
                    <Card.Text className="mt-2">{cat.label}</Card.Text>
                    <Button size="sm" variant="primary" onClick={() => startEdit(cat)}>
                      Editar
                    </Button>
                    <Button size="sm" variant="danger" className="ms-2" onClick={() => deleteCategory(cat.id)}>
                      Eliminar
                    </Button>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
