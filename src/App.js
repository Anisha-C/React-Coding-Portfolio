import Header from './components/Header';
import NavBar from './components/NavBar';
import { useState } from 'react';
import AboutMe from './components/pages/AboutMe';
import Project from './components/pages/Projects';
import Contact from './components/pages/Contact';






function App() {
  const [currentPage, setCurrentPage] = useState('aboutMe')

  return (
    <div >
      <div className="header">
        <Header className="" title="Anisha Cartagena Portfolio" subtitle="" />
        <NavBar className="" changePage={setCurrentPage} />
      </div>

      {currentPage === "aboutMe" ? <AboutMe />
        : currentPage === "project" ? <Project />
          : <Contact />}
      <div>
        <a
          href="./images/Anisha Cartagena Current Resume.pdf"
          download
        >
      
          Click to download resume
        </a>
      </div>
    </div >
  );
}
export default App;
