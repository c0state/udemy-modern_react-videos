import React from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import SearchBar from "./SearchBar";

function App() {
  return (
    <div className="App">
      <Container>
        <SearchBar />
      </Container>
    </div>
  );
}

export default App;
