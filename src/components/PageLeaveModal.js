import React, { useState } from "react";
import ReactDom from "react-dom";
import "./PageLeaveModal.css";
import check from "../images/checked.png";
import close from "../images/close.png";

const PageLeaveModal = ({ show }) => {
  const [closeModal, setCloseModal] = useState(false);

  // disabling for now, change !closeModal to closeModal to enable back
  if (!show || !closeModal) return null;

  return ReactDom.createPortal(
    <div className="overlayStyles">
      <div
        className="modalStyles"
        style={{
          letterSpacing: "1px",
          fontSize: "22px",
        }}
      >
        <img
          src={close}
          alt="close"
          style={{
            alignSelf: "flex-end",
            paddingRight: "5px",
            paddingBottom: "2px",
            cursor: "pointer",
          }}
          onClick={() => setCloseModal(true)}
        />
        <h4 style={{ paddingBottom: "30px", color: "purple" }}>
          Are you sure you want to leave?
        </h4>
        <h4 style={{ paddingBottom: "20px", color: "orange" }}>
          Did you know we offer:
        </h4>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <img src={check} alt="tick sign" className="check" /> Free online
            booking service
          </li>
          <li>
            <img src={check} alt="tick sign" className="check" /> Same day/next
            day service
          </li>
          <li>
            <img src={check} alt="tick sign" className="check" /> Flexible
            scheduling
          </li>
          <li>
            <img src={check} alt="tick sign" className="check" /> One of the
            lowest priced callout charges
          </li>
          <li>
            <img src={check} alt="tick sign" className="check" /> We cover all
            London areas
          </li>
        </ul>
        <a
          className="bookNow"
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
