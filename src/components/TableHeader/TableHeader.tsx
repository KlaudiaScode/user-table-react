import React from "react";

export interface TableHeaderProps {
    headerText : string;
}

export default function TableHeader(props: TableHeaderProps){
    return <th>{props.headerText}</th>
}
