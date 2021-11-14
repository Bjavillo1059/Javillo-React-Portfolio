import React from "react";
// import footer from "../footer.json";
// import FooterCard from "./FooterCard";


function Footer() {
  return (
    <footer className="text-center display-7 fw-bold">

        <div>
            <ul className="p-1" id="contact-info">Contact Info:
                <li>
                    <a className="footer-links" href={'https://github.com/Bjavillo1059?tab=repositories'} placeholder="GitHub">My GitHub
                        Repo</a>
                </li>
                <li>
                    <a className="footer-links" href="https://mail.google.com/mail" placeholder="contact-email">brandonjavillo@gmail.com</a>
                </li>
                <li>
                    <a className="footer-links" href="#" placeholder="contact-number">(808)372-0332</a>
                </li>
                <li>
                    <a className="footer-links" href="https://www.linkedin.com/in/brandon-javillo-76724b170/"
                        placeholder="LinkedIn">LinkedIn Profile</a>
                </li>
                <li>
                    <a className="footer-links" href="/pdf/Resume.pdf" placeholder="Resume">Resume</a>
                </li>
            </ul>
        </div>


        <h5>Made with Blood Sweat and Tears!</h5>
        <p>
            God Bless America!
        </p>
    </footer>
  );
}

export default Footer;
