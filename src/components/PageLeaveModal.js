import React, { useState } from "react";
import ReactDom from "react-dom";
import "./PageLeaveModal.css";
import check from "../images/checked.png";

const PageLeaveModal = ({ show }) => {
  const [closeModal, setCloseModal] = useState(false);

  if (!show || closeModal) return null;

  return ReactDom.createPortal(
    <div className="overlayStyles">
      <button onClick={() => setCloseModal(true)}>X</button>
      <div
        className="modalStyles"
        style={{
          letterSpacing: "1px",
          fontSize: "20px",
        }}
      >
        <h4 style={{ paddingBottom: "30px", color: "purple" }}>
          Are you sure you want to leave?
        </h4>
        <h4 style={{ paddingBottom: "20px", color: "orange" }}>
          Did you know we offer:
        </h4>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <img src={check}></img> Free online booking service
          </li>
          <li>
            <img src={check}></img> Same day/next day service
          </li>
          <li>
            <img src={check}></img> One of the lowest priced callout charges
          </li>
          <li>
            <img src={check}></img> We cover all London areas
          </li>
        </ul>
        <a
          class="bookNow"
          href="https://a4allappliances.simplybook.it/v2/#book"
        >
          BOOK NOW
        </a>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default PageLeaveModal;
