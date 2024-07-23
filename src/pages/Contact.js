import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Leo Mak via email @ leo.mak131@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch! You can email me at: </p>
        <a href="mailto:leo.mak131@gmail.com">leo.mak131@gmail.com</a>
        { /* <EmailLink /> */ }
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
