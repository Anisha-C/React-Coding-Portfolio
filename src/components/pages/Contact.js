function Contact() {

  return (
    <section id="contact" className="hello">
      <div className="flex-row">
        <h2 className="section-title secondary-border">
          Contact me
        </h2>
      </div>

      <div className="contact-info">
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

      <div className="contact-form">
        <h3>Contact Form</h3>
        <form action="https://formsubmit.co/anishacartagena525@gmail.com" method="POST">
          <label for="contact-name">Your Name</label>
          <input name="name" type="text" id="contact-name" placeholder="Your Name" />

          <label for="contact-message">Message</label>
          <textarea name="message" id="contact-message" placeholder="Message"></textarea>
          <input type="hidden" name="_next" value="http://localhost:3000/thanks"/>
            <button type="submit">Submit</button>

        </form>
      </div>
    </section >

  )
}
export default Contact