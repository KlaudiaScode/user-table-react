import React from "react";

export interface TableCellProps {
    data: string;
}

export default function TableCell(props: TableCellProps){
    return <td>{props.data}</td>
}
