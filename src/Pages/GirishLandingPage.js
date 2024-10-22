import React from "react";
import TableComponent from "../Components/TableComponent";
import GirishTableComponet from "../Data/GirishTableData.json"

const GirisLandingPage = () => {
    const { data, columns } = GirishTableComponet;
    return (
        <div>
            <TableComponent data={data} columns={columns} />
        </div>
    );
};
export default GirisLandingPage;