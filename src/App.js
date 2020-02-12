import React from 'react';
import logo from './logo.svg';
import '../sass/all.scss';
import 'materialize-css/dist/css/materialize.min.css';
import { Header } from "./components/header.jsx"
import { Banner } from "./components/banner.jsx"
import { Categories } from "./components/categories.jsx"
import { Footer } from "./components/footer.jsx"

function App() {
  return (
    <div className="App had-container">
      <Header />
      <Banner />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
