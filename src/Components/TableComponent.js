import React from "react";
import "../Styles/TableComponent.css";

const TableComponent = ({ data, columns }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.key} style={{ width: column.width }}>
                            {column.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        {columns.map((column) => (
                            <td key={column.key}>
                                {column.key === "link" ? (
                                    // Only the link should display its own value
                                    <a href={row[column.key]} target="_blank" rel="noopener noreferrer">
                                        Open Link {row.link}
                                    </a>
                                ) : (
                                    row[column.key]
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableComponent;
