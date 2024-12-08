import { useState } from "react";
import { loginModder } from "../services/api";
import { useRouter } from "next/router";

import { Button, Card, Container, Form } from "react-bootstrap";
import FooterUser from "./footerUser";
import HeaderUser from "./headerUser";

import "bootstrap/dist/css/bootstrap.min.css";

export default function FormModderLogin() {
  const [formDataModder, setFormDataModder] = useState([]);
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormDataModder((prevFormaDataModder) => ({
      ...prevFormaDataModder,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginModder(formDataModder).then((result) => {
      if (!result.hasOwnProperty("message")) {
        alert("You're connected");
        localStorage.setItem("jwt-token", result);
        router.push("/");
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
            <Card.Header>Login</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="name">Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="name"
                    name="name"
                    value={formDataModder.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="mdp">Mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    id="mdp"
                    name="mdp"
                    value={formDataModder.mdp}
                    onChange={handleChange}
                  />
                </Form.Group>
                <div>
                  <Button type="submit">Connexion</Button>
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
