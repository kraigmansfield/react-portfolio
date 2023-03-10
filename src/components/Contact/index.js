import React, { useState } from 'react'

function Contact() {
  const [formState, setFor, State] = useState({
    name: '',
    email: '',
    message: '',
  })

  const { name, email, message } = formState

  return (
    <section>
      <div className="center">
        <h2 className="page-header">Contact Me</h2>
      </div>
      <div>
        <form id="contact-form">
          <div>
            <label htmlFor="Name">Name:</label>
            <br></br>
            <input type="text" defaultValue={name} name="Name" />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <br></br>
            <input type="email" defaultValue={email} name="email" />
          </div>
          <div>
            <label htmlFor="Message">Message:</label>
            <br></br>
            <textarea rows="5" defaultValue={name} name="Message" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;