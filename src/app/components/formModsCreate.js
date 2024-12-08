import { useState } from "react";
import { createMod } from "../services/api";
import { useRouter } from "next/router";
import { Button, Card, Container, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import FooterUser from "./footerUser";
import HeaderUser from "./headerUser";

export default function FormModCreate() {
  const [formDataMod, setFormDataMod] = useState([]);
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormDataMod((prevFormaDataMod) => ({
      ...prevFormaDataMod,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var accessToken = localStorage.getItem("jwt-token");
    createMod(accessToken, formDataMod).then((result) => {
      if (!result.hasOwnProperty("message")) {
        alert("Mod added");
        router.push("/mods/" + result.id);
      } else {
        alert(result["message"]);
      }
    });
  };

  return (
    <>
      <header>
        <HeaderUser />
      </header>
      <main>
        <Container className="mt-4 w-50">
          <Card>
            <Card.Header>Create Mod</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <div hidden>
                  <Form.Label htmlFor="id">Id</Form.Label>
                  <Form.Control
                    type="text"
                    id="id"
                    name="id"
                    value={formDataMod.id}
                    onChange={handleChange}
                  />
                </div>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="name">Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="name"
                    name="name"
                    value={formDataMod.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="expansion">Expansion</Form.Label>
                  <Form.Control
                    type="text"
                    id="expansion"
                    name="expansion"
                    value={formDataMod.expansion}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="type">Type</Form.Label>
                  <Form.Control
                    type="text"
                    id="type"
                    name="type"
                    value={formDataMod.type}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="age">Age</Form.Label>
                  <Form.Control
                    type="text"
                    id="age"
                    name="age"
                    value={formDataMod.age}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="gender">Gender</Form.Label>
                  <Form.Control
                    type="text"
                    id="gender"
                    name="gender"
                    value={formDataMod.gender}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="clothing_category">
                    Clothing Category
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="clothing_category"
                    name="clothing_category"
                    value={formDataMod.clothing_category}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="size">Size</Form.Label>
                  <Form.Control
                    type="text"
                    id="size"
                    name="size"
                    value={formDataMod.size}
                    onChange={handleChange}
                  />
                </Form.Group>

                <div>
                  <Button type="submit">Créer</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </main>
      <footer className="mt-5">
        <FooterUser />
      </footer>
    </>
  );
}
