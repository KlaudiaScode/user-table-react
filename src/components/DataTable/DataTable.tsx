import TableCell from "../TableCell";
import TableHeader from "../TableHeader";

export interface User {
  id: number | string;
  name: {
    first: string;
    last: string;
  };
  gender: string;
  nationality: string;
  profession: string;
  maritalStatus: string;
}

export interface DataTableProps {
  headers: string[],
  users: User []
}

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
          <tr key={user.id}>
            <TableCell data={user.name.last} />
            <TableCell data={user.name.first} />
            <TableCell data={user.gender} />
            <TableCell data={user.nationality} />
            <TableCell data={user.profession} />
            <TableCell data={user.maritalStatus} />
          </tr>
        ))}
      </tbody>
    </table>
  )
}