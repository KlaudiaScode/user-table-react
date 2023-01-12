import React from 'react';
import './App.css';
import TableHeader from './components/TableHeader';
import TableCell from './components/TableCell';

const tableHeaders = [
  'Surname',
  'Name',
  'Gender',
  'Nationality',
  'Profession',
  'Marital status'
]
const users = [
  {
    id: 1,
    name:{
      first: 'Karolina',
      last: 'Nowak'
    },
    gender: 'female',
    nationality: 'PL',
    profession: 'actor',
    maritalStatus: 'married'
  },
  {
    id: 2,
    name:{
      first: 'Tom',
      last: 'Gonzales'
    },
    gender: 'male',
    nationality: 'DE',
    profession: 'fotballer',
    maritalStatus: 'divorced'
  },
  {
    id: 3,
    name:{
      first: 'Rose',
      last: 'Walters'
    },
    gender: 'female',
    nationality: 'FR',
    profession: 'cook',
    maritalStatus: 'widow'
  },
  {
    id: 4,
    name:{
      first: 'Adam',
      last: 'Smasher'
    },
    gender: 'male',
    nationality: 'UE',
    profession: 'soldier',
    maritalStatus: 'married'
  }
]

function App() {
  return (
    <div className="App">
         <table>
               <thead>
                  <tr>
                    {tableHeaders.map((headerName)=><TableHeader headerText={headerName} />)}
                  </tr>
               </thead>
               <tbody>
                {users.map((user)=>(
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
    </div>
  );
}

export default App;