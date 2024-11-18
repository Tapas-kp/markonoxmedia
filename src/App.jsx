import { useContext, useState } from "react";

import "./App.css";
// import Navbar from './Pages/Navbar'
import { Themecontext } from "./Contextprovider/Themecontext";
// import { background } from '@chakra-ui/react'
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Skills } from "./Pages/Skills";
import { Projects } from "./Pages/Projects";
import { Contact } from "./Pages/Contact";
import { Gitstatus } from "./Pages/Gitstatus";

function App() {
  const { mode } = useContext(Themecontext);
  let obj = {
    backgroundColor: mode ? "grey" : "white",
  };
  return (
    <div style={obj} id="gandu">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Gitstatus />
      <Contact />
    </div>
  );
}

export default App;
