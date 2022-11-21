import React from "react";
import { Row, Col } from "antd";
import { WifiOutlined } from "@ant-design/icons";

const CreditCard = ({ bgImage, acNumber, expDate, ownerName }) => {
  console.log("background image: ", bgImage);
  console.log("account number: ", acNumber);
  console.log("expires date: ", expDate);
  console.log("owner name: ", ownerName);
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        height: "220px",
        width: "400px",
        borderRadius: "1rem",
        padding: "10px 24px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="shadow-box"
    >
      <div>
        <WifiOutlined style={{ color: "white", fontSize: "22px" }} />
      </div>

      <p
        style={{
          color: "white",
          fontSize: "20px",
          marginTop: "25px",
        }}
      >
        {acNumber}
      </p>

      <Row style={{ marginTop: "15px" }}>
        <Col
          span={8}
          style={{
            height: "100%",
            color: "white",
            fontSize: "15px",
            marginTop: "10px",
          }}
        >
          <p style={{ color: "gray" }}>Card Holder</p>
          <br />
          <p style={{ marginTop: "-40px" }}>{ownerName}</p>
        </Col>
        <Col
          span={10}
          style={{
            height: "100%",
            color: "white",
            fontSize: "15px",
            marginTop: "10px",
          }}
        >
          <p style={{ color: "gray" }}>Expires</p>
          <br />
          <p style={{ marginTop: "-40px" }}>{expDate}</p>
        </Col>
        <Col
          span={6}
          style={{
            height: "100%",
            color: "white",
            fontSize: "15px",
            marginTop: "10px",
            textAlign: "right",
          }}
        >
          <p>right</p>
        </Col>
      </Row>
    </div>
  );
};

export default CreditCard;
