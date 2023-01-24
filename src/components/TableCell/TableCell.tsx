import React from "react";

export interface TableCellProps {
    data: string | number;
}

export default function TableCell(props: TableCellProps){
    return <td>{props.data}</td>
}
