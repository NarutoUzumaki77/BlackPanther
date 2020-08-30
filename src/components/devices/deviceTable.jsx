import React from "react";
import Device from "./device";
import TableHeader from "../common/tableHeader";

const DeviceTable = (props) => {
  const { columns, onSort, sortColumn, devices, onDelete } = props;

  return (
    <table className="table">
      <TableHeader
        columns={columns}
        onSort={onSort}
        sortColumn={sortColumn}
      />
      <tbody>
        {devices.map((device) => (
          <Device 
            device={device} 
            onDelete={onDelete} 
            key={device.id} 
          />
        ))}
      </tbody>
    </table>
  );
};

export default DeviceTable;
