import { Navbar, NavbarText, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default function FooterUser() {
      return (
            <>
                  <Navbar className="bg-body-tertiary" fixed="bottom">
                        <Container className="justify-content-center">
                              <Nav>
                                    <NavbarText>Mentions Légales</NavbarText>
                              </Nav>
                        </Container>
                        <Container className="justify-content-center">
                              <Nav>
                                    <NavbarText>Contact</NavbarText>
                              </Nav>
                        </Container>
                        <Container className="justify-content-center">
                              <Nav>
                                    <NavbarText>A propos</NavbarText>
                              </Nav>
                        </Container>
                  </Navbar>
            </>
      )
}