import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="column_one">
          <h1>
            David
            <br />
            Baladi
          </h1>
          <p>Greater Toronto Area</p>
          <p>
            Phone: <a href="tel:416-688-8645">+1-416-688-8645</a>
          </p>
          <p>
            <a href="mailto:davidbaladi@gmail.com">
              Email: DavidBaladi@gmail.com
            </a>
          </p>
        </div>
        <div className="column_two">
          <h4>Availablity</h4>
          <p>
            Mon - Fri 8:00 a.m. to 10:00 p.m. (EST)
            <br />
            <br />
            (Looking For Work)
          </p>
          <a
            href="https://github.com/davidbaladi"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/dbaladi"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
