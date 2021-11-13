import React from "react";

function Footer() {
  return (
    <footer className="text-center display-7 fw-bold">
      <div>
        <ul className="p-1" id="contact-info">
          Contact Info:
          <li>
            <a href="https://github.com/Bjavillo1059?tab=repositories"
              aria-placeholder="GitHub">
              My GitHub Repo
            </a>
          </li>
          <li>
            <a href="https://mail.google.com/mail"
              aria-placeholder="contact-email">
              brandonjavillo@gmail.com
            </a>
          </li>
          <li>
            <a href="#" aria-placeholder="contact-number">
              (808)372-0332
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/brandon-javillo-76724b170/"
              aria-placeholder="LinkedIn">
              LinkedIn Profile
            </a>
          </li>
          <li>
            <a href="/pdf/Resume.pdf" aria-placeholder="Resume">
              Resume
            </a>
          </li>
        </ul>
      </div>

      <h5>Made with Blood Sweat and Tears!</h5>
      <p>God Bless America!</p>
    </footer>
  );
}

export default Footer;
