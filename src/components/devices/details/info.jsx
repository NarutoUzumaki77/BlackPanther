import React from "react";

const DeviceInfo = ({ details, location }) => {
  let detail = [];
  try {
    detail = details.details;
    detail = detail.split(",");
  } catch (ex) {}

  return (
    <div>
      <div className="div-heading">Details</div>
      <div className="device-body">
        <div
          className="row"
          style={{ marginBottom: "10px", paddingLeft: "25px" }}
        >
          <div className="col-4">Color</div>
          <div className="col-8">{details.color}</div>
        </div>
        <div
          className="row"
          style={{ marginBottom: "10px", paddingLeft: "25px" }}
        >
          <div className="col-4">Product</div>
          <div className="col-8">{details.product}</div>
        </div>
        <div
          className="row"
          style={{ marginBottom: "10px", paddingLeft: "25px" }}
        >
          <div className="col-4">Manufacturer</div>
          <div className="col-8">{details.manufacturer}</div>
        </div>
        <div
          className="row"
          style={{ marginBottom: "10px", paddingLeft: "25px" }}
        >
          <div className="col-4">Type</div>
          <div className="col-8">{details.type}</div>
        </div>
        <div
          className="row"
          style={{ marginBottom: "10px", paddingLeft: "25px" }}
        >
          <div className="col-4">location</div>
          <div className="col-8">{location}</div>
        </div>
        <div
          className="row"
          style={{ marginBottom: "10px", paddingLeft: "25px" }}
        >
          <div className="col-4">Status</div>
          <div className="col-8">{details.status}</div>
        </div>
        {detail && (
          <div
            className="row"
            style={{ marginBottom: "10px", paddingLeft: "25px" }}
          >
            <div className="col-4">Details</div>
            <div className="col-8">
              <ul>
                {detail.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceInfo;
