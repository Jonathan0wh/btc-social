import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

import styles from './Header.module.scss';

const Header = () => (
  <Navbar color="dark" dark expand="md">
    <Container>
      <NavbarBrand href="/">BTC Social</NavbarBrand>

      <Nav>
        <NavItem>
          <Link to="/" className={styles.navlink}>
            All Posts
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/post/create" className={styles.navlink}>
            Create a Post
          </Link>
        </NavItem>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
