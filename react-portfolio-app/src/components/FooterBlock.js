import React from "react";
import "./FooterBlock.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function FooterBlock () {
  return (
    <footer className='navFooter' >

        <Router>
            <ul className="p-1" id="contact-info">Contact Info:
                <li>
                    <Link className="footer-links" to={'https://github.com/Bjavillo1059?tab=repositories'} placeholder="GitHub">My GitHub Repo
                    </Link>
                </li>
                <li>
                    <Link className="footer-links" to="https://mail.google.com/mail" placeholder="contact-email">brandonjavillo@gmail.com
                    </Link>
                </li>
                <li>
                    <Link className="footer-links" to="#" placeholder="contact-number">(808)372-0332
                    </Link>
                </li>
                <li>
                    <Link className="footer-links" to="https://www.linkedin.com/in/brandon-javillo-76724b170/"
                        placeholder="LinkedIn">LinkedIn Profile
                    </Link>
                </li>
                <li>
                    <Link className="footer-links" to="/pdf/Resume.pdf" placeholder="Resume">Resume
                    </Link>
                </li>
            </ul>
        </Router>


        <h5>Made with Blood Sweat and Tears!</h5>
        <p>
            God Bless America!
        </p>
    </footer>
  );
}

export default FooterBlock;
