import React, { useEffect, useState } from 'react';
import './App.css';
import DataTable from './components/DataTable';
import ButtonValue from './components/ButtonValue';


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
  const [userData, setUserData] = useState(users);
  const mounted = React.useRef(false);
  
  useEffect(()=>{
    setTimeout(()=>{
      console.log('setTimeout');
      const newUsers = Array.from(users)
      newUsers.push({
        id: 5,
      name:{
        first: 'Artur',
        last: 'Domownik'
      },
      gender: 'male',
      nationality: 'UE',
      profession: 'soldier',
      maritalStatus: 'married'
      })
     setUserData(newUsers);
    },3000);

    //setTimeout(()=>{
    //  setUserData(users)
    //},6000)
  },[])

  useEffect(()=>{
    if(mounted.current){
      setTimeout(()=>{
        setUserData(users)
      },3000)
    }else{
      mounted.current = true;
    }
  },[userData])

    return (
    <div className="App">
      <div>
      <ButtonValue />
      </div>
        <DataTable headers={tableHeaders} users={userData}/>
    </div>
  );
}
export default App;

//NOTATKA I PRZYKŁADY Z UŻYCIA setTimeout()
//Notatka o useRef()