import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import "./ApplianceRepair.css";
import { ApplianceRepairContext } from "../App";
import WashingMachineRepairImage from "../images/washing-machine-repair.jpeg";

const ApplianceRepair = () => {
  const currentApplinace = useContext(ApplianceRepairContext);

  const location = useLocation().pathname;

  let description = "";
  let image = "";

  if (currentApplinace === "fridge-repair" || location === "/fridge-repair") {
    description = "Fridge";
    image = (
      <img
        src={WashingMachineRepairImage}
        className="applianceImage"
        alt="Fridge Repair London"
      />
    );
  } else if (
    currentApplinace === "washing-machine-repair" ||
    location === "/washing-machine-repair"
  ) {
    description = "Washing Machine";
    image = (
      <img
        src={WashingMachineRepairImage}
        className="applianceImage"
        alt="Washing Machine Repair London"
      />
    );
  } else if (
    currentApplinace === "cooker-repair" ||
    location === "/cooker-repair"
  ) {
    description = "Cooker";
    image = (
      <img
        src={WashingMachineRepairImage}
        className="applianceImage"
        alt="Cooker Repair London"
      />
    );
  } else if (
    currentApplinace === "oven-repair" ||
    location === "/oven-repair"
  ) {
    description = "Oven";
    image = (
      <img
        src={WashingMachineRepairImage}
        className="applianceImage"
        alt="Oven Repair London"
      />
    );
  } else if (
    currentApplinace === "dishwasher-repair" ||
    location === "/dishwasher-repair"
  ) {
    description = "Dishwasher";
    image = (
      <img
        src={WashingMachineRepairImage}
        className="applianceImage"
        alt="Dishwasher Repair London"
      />
    );
  } else if (
    currentApplinace === "microwave-repair" ||
    location === "/microwave-repair"
  ) {
    description = "Microwave";
    image = (
      <img
        src={WashingMachineRepairImage}
        className="applianceImage"
        alt="Microwave Repair London"
      />
    );
  }

  console.log("location", location);
  console.log("description", description);

  if (description === "" || location === "/") {
    return null;
  } else
    return (
      <div className="applianceRepair">
        <p>{description}</p>
        {image}
      </div>
    );

  // return <button onClick={() => console.log(location)}>Click me</button>;
};

export default ApplianceRepair;
