import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Project from './components/project/Project';
import Feedback from './components/feedback/Feedback';
import Contact from './components/contact/Contact';

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Experience />
      <Services />
      <Project />
      <Feedback />
      <About />
      <Contact />
    </>
  );
};

export default App;
