import { Navbar, NavbarText, Nav, NavDropdown } from "react-bootstrap";
import { Container, Button } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'


export default function HeaderUser() {
      const [userConnected, setUserConnected] = useState(false);
      const [userToken, setUserToken] = useState("")

      useEffect(() => {
            const token = localStorage.getItem("jwt-token")

            try {
                  const decoded = jwtDecode(token)
                  setUserToken(decoded.username)
                  setUserConnected(true)
            } catch (error) {
                  setUserToken("guest")
                  setUserConnected(false)
            }

      }, [])

      const handleSubmit = () => {
            localStorage.removeItem("jwt-token")
            alert("You've been disconneted")
            setUserToken("guest")
            setUserConnected(false)
      }

      return (
            <Navbar className="bg-body-tertiary">
                  <Container>
                        <Nav>
                              <Nav.Link href={"/"}>Home</Nav.Link>
                        </Nav>
                  </Container>
                  <Container className="justify-content-center">
                        <Nav>
                              <Nav>
                                    <NavDropdown title="Mods" id="header-dropdown">
                                          <NavDropdown.Item href="/mods/create">Create new mod</NavDropdown.Item>
                                          <NavDropdown.Item href="/mods/">Mods list</NavDropdown.Item>
                                    </NavDropdown>
                              </Nav>
                        </Nav>
                  </Container>
                  <Container className="justify-content-end">
                        <NavbarText className="pe-3">Hello {userToken}</NavbarText>
                        <Nav>
                              {
                                    userConnected ?
                                          <Button onClick={handleSubmit} variant="secondary"><FontAwesomeIcon icon={faArrowRightFromBracket} /></Button>
                                          : <Nav.Link href={"/signin"}><FontAwesomeIcon icon={faLock} /> Log in</Nav.Link>
                              }
                        </Nav>
                  </Container>
            </Navbar >

      )
}