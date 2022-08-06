function Project() {

  return (
    <section id="projects">
      <div className="flex-row">
        <h2 class="section-title secondary-border">
          Projects
        </h2>
      </div>
      <div className="websites">
        <article class="project">
          <a href="https://anisha-c.github.io/run-buddy2/">
            <img src="./images/runbuddy.PNG" alt="Run buddy Website" />
          </a>
          <div class="project-bio">
            <h3 class="project-name">Run Buddy Website</h3>
            <br />
            <p>The purpose of this project was to learn how to build a website using HTML and Advanced CSS</p>
          </div>
        </article>

        <article class="project">

          <a href="https://anisha-c.github.io/Web-Development-Accesibility/">
            <img src="./images/Horiseon.PNG" alt="Web-Development-Accessibility" />
          </a>
          <div class="project-bio">
            <h3 class="project-name">Web-Development-Accessibility Project</h3>
            <br />
            <p>The purpose of this project was to take a simple starter code and improve it. The starter code was missing
              semantic HTML elements, there was no logical independent struct of styling and positioning, or descriptive
              title and the images were missing alt attributes.</p>
          </div>
        </article>

        <article class="project">

          <a href="https://anisha-c.github.io/Pay-Up/">
            <img src="./images/payup.PNG" alt="Pay up" />
          </a>
          <div class="project-bio">
            <h3 class="project-name">Pay Up</h3>
            <br />
            <p>The purpose of this website is to create a simple way for people in group outtings to spilt bills.</p>
          </div>
        </article>

        <article class="project">

          <a href="https://fierce-dusk-64280.herokuapp.com" >
            <img src="./images/Bibli Studio.png" alt="Bibli-Studio Logo" width="200" height="200" /></a>



          <div class="project-bio">
            <h3 class="project-name">Bibli Studios</h3>
            <br />
            <p>The purpose of this website is To be able to see and search all the movies that you own in one place
              instead of having to physically search for the movie you want to watch.</p>

            <article class="project">

              <a href="https://fitandtrack.herokuapp.com/">
                <img src="./images/fit_and_track.jpg" alt="Fit And Track" />
              </a>
              <div class="project-bio">
                <h3 class="project-name">Fit And Track</h3>
                <br />
                <p>The purpose of this project was make an application that will track fitness and food intake.</p>
              </div>
            </article>

          </div>
        </article>
      </div >
    </section >

  )
}
export default Project