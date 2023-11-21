import React from "react";
import { IoIosMail } from "react-icons/io";

export default function NewsLetter() {
  return (
    <div className="Box">
      <h5>Newsletter</h5>
      <form className="Email_box">
        <input type="email" />
        <button type="submit" id="mail_list" className="mail_list">
          <IoIosMail className="icon" />
        </button>
      </form>
      <div>
        <p>
          Subscribe to newsletter and unlock a world of exclusive benefits. Be
          the first to know about my latest projects, special promotions, and
          exciting work.
        </p>
      </div>
    </div>
  );
}
