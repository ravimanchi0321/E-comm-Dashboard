import React from "react";
import TableComponent from "../Components/TableComponent";
import VamshiTableData from "../Data/VamshiTableData.json"

const VamshiLandingPage = () => {
    const { data, columns } = VamshiTableData;
    return (
        <div>
            <TableComponent data={data} columns={columns} />
        </div>
    );
};
export default VamshiLandingPage;