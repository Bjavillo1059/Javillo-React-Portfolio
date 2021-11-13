import React from "react";
import footer from "../footer.json"
import FooterCard from "./FooterCard";
import { ListGroup, ListGroupItem } from "react-bootstrap";

function Footer() {
  return (
    <footer className="text-center display-7 fw-bold">
      <ListGroup horizontal>
        <ListGroup.Item>
          {""}
          {footer.map((footer) => (
            <FooterCard footer={footer} />
          ))}        
        </ListGroup.Item>
      </ListGroup>

      <h5>Made with Blood Sweat and Tears!</h5>
      <p>God Bless America!</p>
    </footer>
  );
}

export default Footer;
