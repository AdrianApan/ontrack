import React from "react"
import Container from "react-bootstrap/Container"

import "./App.scss"
import Books from "../Books"

function App() {
  return (
    <Container className="app">
      <Books />
    </Container>
  )
}

export default App
