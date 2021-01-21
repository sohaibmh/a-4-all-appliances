import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import "./ApplianceRepair.css";
import { ApplianceRepairContext } from "../App";
import washingMachineRepairImage from "../images/washing-machine-repair.jpg";
import fridgeRepairImage from "../images/fridge-repair.jpg";
import dishwasherRepairImage from "../images/dishwasher-repair-with-tools.jpeg";
import ovenRepairImage from "../images/oven-repair-model.jpg";
import cookerRepairImage from "../images/cooker-repair.jpeg";
import microwaveRepairImage from "../images/microwave-repair.jpeg";

const ApplianceRepair = () => {
  const currentApplinace = useContext(ApplianceRepairContext);

  const location = useLocation().pathname;

  let description = "";
  let image = "";

  if (currentApplinace === "fridge-repair" || location === "/fridge-repair") {
    description = (
      <div>
        <h4>Fridge Freezer Repair</h4>
        <p>
          A 4 All Appliances have over a decade’s worth of experience as one of
          the trusted independent domestic appliance servicing companies in
          London, making us ideally placed to carry out fridge freezer repairs
          in all London areas. We service all new and existing freestanding,
          integrated and built-in units from leading manufacturers, including
          AEG, Fridgemaster, LG, Siemens and more, and carry out safety checks
          as standard at every job.
        </p>
        <div>
          We fix these common fridge freezer problems and more:
          <br /> <br />
          <ul>
            <li key="fridgeTemperature">Temperature irregularities</li>
            <li key="iceBuildUp">Frost build up/freezing</li>
            <li key="noise">Noisy</li>
            <li key="electrical">Electrical issues</li>
            <li key="thermostat">Faulty thermostat</li>
            <li key="leakage">Leaks</li>
          </ul>
        </div>
      </div>
    );
    image = (
      <img
        src={fridgeRepairImage}
        className="applianceImage"
        alt="Fridge Repair London"
      />
    );
  } else if (
    currentApplinace === "washing-machine-repair" ||
    location === "/washing-machine-repair"
  ) {
    description = (
      <div>
        <h4>Washing Machine Repair</h4>
        <p>
          Whatever the issue with your washing machine, we can usually repair it
          on the spot. Our warehouse is fully stocked with a huge range of
          replacement parts and our vans contain a great range of spare parts so
          we can get your washing machine up and running again as soon as
          possible.
        </p>
        <div>
          Is your washing machine:
          <br /> <br />
          <ul>
            <li key="drainage">Not draining?</li>
            <li key="spinCycle">Not running the spin cycle properly?</li>
            <li key="temperature">Not getting to the right temperature?</li>
            <li key="washingMachineDoor">
              Are you having problems opening the washing machine door?
            </li>
            <li key="washingMAchineNoise">Making too much noise?</li>
            <li key="washingMachineDrum">Tearing your clothes?</li>
          </ul>
          A 4 All Appliances is on hand to help repair all of these common
          washing machine problems and more.
        </div>
      </div>
    );
    image = (
      <img
        src={washingMachineRepairImage}
        className="applianceImage"
        alt="Washing Machine Repair London"
      />
    );
  } else if (
    currentApplinace === "cooker-repair" ||
    location === "/cooker-repair"
  ) {
    description = (
      <div>
        <h4>Electric Cooker Repair</h4>
        <p>
          As one of the trusted independent domestic appliance servicing
          companies in London, A 4 All Appliances have many lines of stock and
          spare parts in both our warehouse and service vehicles from a number
          of leading cooker manufacturers, including Hotpoint, Indesit, Smeg and
          more. We aim to repair your cooker on the spot. However, if we need a
          second visit, we will do so at no extra cost.
        </p>
      </div>
    );
    image = (
      <img
        src={cookerRepairImage}
        className="applianceImage"
        alt="Cooker Repair London"
      />
    );
  } else if (
    currentApplinace === "oven-repair" ||
    location === "/oven-repair"
  ) {
    description = (
      <div>
        <h4>Oven Repair</h4>
        <p>
          Whatever the issue with your oven, we can usually repair it on the
          spot. Our warehouse is fully stocked with a huge range of replacement
          parts and our vans contain a great range of spare parts so we can get
          your oven working again as soon as possible.
        </p>
        <div>
          Is your oven:
          <br /> <br />
          <ul>
            <li key="heating">Not heating properly?</li>
            <li key="ignition">Failing to ignite?</li>
            <li key="heatDistribution">Cooking food unevenly?</li>
            <li key="heatFlow">Presenting uneven heat flow?</li>
            <li key="thermostat">Having thermostat problems?</li>
          </ul>
          A 4 All Appliances is on hand to help repair all of these common oven
          problems and more.
        </div>
      </div>
    );
    image = (
      <img
        src={ovenRepairImage}
        className="applianceImage"
        alt="Oven Repair London"
      />
    );
  } else if (
    currentApplinace === "dishwasher-repair" ||
    location === "/dishwasher-repair"
  ) {
    description = (
      <div>
        <h4>Dishwasher Repair</h4>
        <p>
          We service all new and existing freestanding, and integrated
          dishwashers from leading manufacturers including Hotpoint, Indesit,
          Bosch, Smeg, Whirlpool, and more.
        </p>
        <div>
          We fix these common dishwasher problems and more:
          <br /> <br />
          <ul>
            <li key="leaks">Leaks </li>
            <li key="blockages">Blockages</li>
            <li key="cleaning">Poor general cleaning</li>
            <li key="lights">Warning lights on</li>
            <li key="smell">Bad odours</li>
            <li key="drainage">Water not draining</li>
            <li key="sprayArms">Damaged or faulty spray arms</li>
            <li key="dispenser">Damaged or faulty detergent dispenser</li>
          </ul>
        </div>
      </div>
    );
    image = (
      <img
        src={dishwasherRepairImage}
        className="applianceImage"
        alt="Dishwasher Repair London"
      />
    );
  } else if (
    currentApplinace === "microwave-repair" ||
    location === "/microwave-repair"
  ) {
    description = (
      <div>
        <h4>Microwave Repair</h4>
        <p>
          As one of the trusted independent domestic appliance servicing
          companies in London, A 4 All Appliances have many lines of stock and
          spare parts in both our warehouse and service vehicles from a number
          of leading microwave manufacturers, including Bosch, Siemens, AEG, and
          more. We aim to repair your microwave on the spot. However, if we need
          a second visit, we will do so at no extra cost.
        </p>
      </div>
    );
    image = (
      <img
        src={microwaveRepairImage}
        className="applianceImage"
        alt="Microwave Repair London"
      />
    );
  }

  if (description === "" || location === "/") {
    return null;
  } else
    return (
      <div className="applianceRepair">
        <div className="applianceDescription">{description}</div>
        {image}
      </div>
    );
};

export default ApplianceRepair;
