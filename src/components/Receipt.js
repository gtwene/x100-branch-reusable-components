import React from "react";
import "./Receipt.css";
import profilepicture from "../../assets/profile.avif";
import { Button } from "@mantine/core";

function Receipt() {
  return (
    <div className="receipt">
      <div className="receipt__container">
        {/*Profile picture*/}
        <div style={{ textAlign: "center" }}>
          <img src={profilepicture} alt="" className="receipt__profile" />
        </div>

        {/*Receipt title*/}
        <div className="receipt__title">Transaction summary</div>

        {/*Inner card*/}
        <div className="receipt__innerCard">
          <div>Account Balance</div>
          <div>Ledger Balance</div>
          <div>Blocked Amount</div>
        </div>

        {/*Lower Section of transactions */}
        <div className="receipt__transSummary">
          <div className="receipt__title">Final Transaction summary</div>

          {/*Summary of transactions*/}
          <div className="receipt__transaction">
            <div>Rooms and offer:</div>
            <div>$625.43</div>
          </div>

          <div className="receipt__transaction">
            <div>8 % VAT:</div>
            <div>$50.03</div>
          </div>

          <div className="receipt__transaction">
            <div>City tax:</div>
            <div>$16.44</div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#2dd071",
              fontWeight: "700",
              fontSize: "20px",
              marginTop: "10px",
            }}
            className="receipt__total"
          >
            <div>Total Price:</div>
            <div>$698.87</div>
          </div>

          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <Button fullWidth radius="md" size="md">
              Request To Book
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
