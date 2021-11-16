import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) 
  ? buttonSize 
  : SIZES[0];

  return (
    <Router>
      <Link to="/" className='btn-mobile'>
        <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        >
        {children}
        </button>
        </Link>
    </Router>
    );
};

export default Button;