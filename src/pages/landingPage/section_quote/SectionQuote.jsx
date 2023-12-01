import React from "react";
import "./quote.css"
import QuoteImage from "../../../assets/Images/QuoteImage.jpg"

export default function SectionQuote() {
  return (
    <div className="quote-container relative flex flex-column">
      <div>
        <img src={QuoteImage} alt={QuoteImage} />
      </div>
      <div className="text-width">
        <h3 className="contact-text">
          “There are no bad pictures; that’s just how your face looks
          sometimes.”
        </h3>
        <h5 className="author-text">- ABHRAHAM LINCON</h5>
      </div>
    </div>
  );
}
