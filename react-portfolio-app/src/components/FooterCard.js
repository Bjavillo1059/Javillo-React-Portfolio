import React from "react";

function FooterCard(props) {
  return (
    <>
      <a to={props.footer.footerLink} placeholder={props.footer.placeholder} >{props.footer.title} </a>
      {""}
    </>
  );
}

export default FooterCard;
