function Contact() {

  return (
    <section id="contact" className="hello">
      <div class="flex-row">
        <h2 class="section-title secondary-border">
          Contact me
        </h2>
      </div>

      <div class="contact-info">
        <div>
          <h3>Questions</h3>
          <p>
            If you have any questions or are interested in working with me,
            <br />
            Let me know and I'll be happy to talk to you!
          </p>

          <address>
            New York, NY <br />
            P: <a href="tel:555.555.5555">555.555.555 (555.555.5555)</a><br />
            E: <a href="anishacartagena525@gmail.com">anishacartagena525@gmail.com</a>
          </address>

        </div>
      </div>

      <div class="contact-form">
        <h3>Contact Form</h3>
        <form>
          <label for="contact-name">Your Name</label>
          <input type="text" id="contact-name" placeholder="Your Name" />

          <label for="contact-message">Message</label>
          <textarea id="contact-message" placeholder="Message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section >

  )
}
export default Contact