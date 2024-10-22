import React from "react";
import TableComponent from "../Components/TableComponent";
import RaviTableData from "../Data/RaviTableData.json";

const RaviLandingPage = () => {
  const { data, columns } = RaviTableData;

  return (
    <div>
      <TableComponent data={data} columns={columns} />
    </div>
  );
};
export default RaviLandingPage;
