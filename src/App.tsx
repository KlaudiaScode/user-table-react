import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
         <table>
               <thead>
                  <tr>
                     <th>Surname</th> 
                     <th>Name</th> 
                     <th>Gender</th> 
                     <th>Nationality</th> 
                     <th>Profession</th> 
                     <th>Marital status</th>
                  </tr>
               </thead>
               <tbody>
                <tr>
                  <td>Nowak</td>
                  <td>Karolina</td>
                  <td>Female</td>
                  <td>PL</td>
                  <td>Actor</td>
                  <td>Married</td>
                </tr>
                <tr>
                  <td>Gonzales</td>
                  <td>Tom</td>
                  <td>Male</td>
                  <td>DE</td>
                  <td>Footballer</td>
                  <td>Divorced</td>
                </tr>
                <tr>
                  <td>Walters</td>
                  <td>Rose</td>
                  <td>Female</td>
                  <td>FR</td>
                  <td>Cook</td>
                  <td>Widow</td>
                </tr>
                <tr>
                  <td>King</td>
                  <td>Adam</td>
                  <td>Male</td>
                  <td>UE</td>
                  <td>Soldier</td>
                  <td>Married</td>
                </tr>
               </tbody>
            </table>
    </div>
  );
}

export default App;