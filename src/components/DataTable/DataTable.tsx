import { User } from "../../types";
import TableCell from "../TableCell";
import TableHeader from "../TableHeader";

export interface DataTableProps {
  headers: string[],
  users: User []
};

export default function DataTable(props: DataTableProps){
  return (
    <table>
      <thead>
        <tr>
          {props.headers.map((headerName)=><TableHeader key={headerName} headerText={headerName} />)}
        </tr>
      </thead>
      <tbody>
        {props.users.map((user)=>(
          <tr key={user.login.uuid}>
            <TableCell data={user.name.last} />
            <TableCell data={user.name.first} />
            <TableCell data={user.gender} />
            <TableCell data={user.nat} />
            <TableCell data={user.dob.age} />
            <TableCell data={user.location.country} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
