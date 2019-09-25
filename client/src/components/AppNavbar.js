import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap'

function AppNavbar() {
  return (
    <div>
      <Navbar color="dark" dark>
        <Container>
          <NavbarBrand href="/">myToDo App</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://github.com/RodolfoNei">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppNavbar