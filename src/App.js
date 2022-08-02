import Header from './components/Header';
import NavBar from './components/NavBar';
import { useState } from 'react';
import AboutMe from './components/pages/AboutMe';
import Project from './components/pages/Projects';
import Contact from './components/pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('aboutMe')

  return (
    <div className="App">
      <NavBar changePage={setCurrentPage}/>
      <Header title="Anisha" subtitle="Welcome to my portfolio" />
      {currentPage === "aboutMe" ? <AboutMe />
        : currentPage === "project" ? <Project />
          : <Contact />}
    </div>
  );
}
export default App;
