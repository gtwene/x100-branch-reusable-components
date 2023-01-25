import React from "react";
import "./CustomerDetails.css";
import smile from "../../assets/smile.jpg";
import { FiMapPin } from "react-icons/fi";
import { FaMoneyCheckAlt } from "react-icons/fa";

function CustomerDetails() {
  // let cd = customer details
  return (
    <div>
      <div className="cd__container">
        <div>
          <img
            src={smile}
            alt=""
            style={{ height: "150px", borderRadius: "10px" }}
          />
        </div>

        <div className="cd__rightSide">
          <div className="cd__title">TRANSACTION DETAILS</div>
          <div className="cd__description">Transaction Summary</div>
          <div className="cd__shortDescription">
            <FiMapPin />
            Ghana
          </div>

          <div className="cd__transactionBalance">
            <div className="cd__balance">
              <div>Account Bal.</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaMoneyCheckAlt color={"#2dd071"} />
                <div className="cd__amount">$3,000.00</div>
              </div>
            </div>

            <div className="cd__balance">
              <div>Ledger Bal.</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaMoneyCheckAlt color={"#2dd071"} />
                <div className="cd__amount">$500.00</div>
              </div>
            </div>

            <div className="cd__balance">
              <div>Blocked Amount</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaMoneyCheckAlt color={"#2dd071"} />
                <div className="cd__amount">$90.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
