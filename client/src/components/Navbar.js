import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const styles = {
  navbar: {
    backgroundColor: "#FFD6E8",
    textDecoration: "none",
    color: "#FF007F",
    listStyle: "none",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    display: "inline-block",
    margin: "0.5rem",
    fontSize: 17,
  },
};

return (
  <>
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link style={styles.navbar} href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={styles.navbar} href="/projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={styles.navbar} href="/resume"></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.link style={styles.navbar} href="contact">Contact</Nav.link>
      </Nav.Item>
    </Nav>
  </>
);