import React from "react";
import Barcode from "react-barcode";
import "./barcode.css";

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="barcode">
        <p style={{ fontSize: "7vw" }}>MerinaSoft Pharmacy</p>
        <Barcode value={props.code} width={1.3} height={32} fontSize={10} />
        <p style={{ fontSize: "5vw" }}>{props.product}</p>
        <p style={{ fontSize: "5vw" }}>MRP : {props.salePrice} tk</p>
      </div>
    </>
  );
});
export default ComponentToPrint;
