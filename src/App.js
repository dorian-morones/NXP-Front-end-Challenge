import React from 'react';
import logo from './logo.svg';
import '../sass/all.scss'
;
import 'materialize-css/dist/css/materialize.min.css';

import { Header } from "./components/header.jsx"

function App() {
  return (
    <div className="App had-container">
      <Header />
    </div>
  );
}

export default App;
