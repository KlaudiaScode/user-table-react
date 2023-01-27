import React, { useEffect, useState } from 'react';
import './App.css';
import DataTable from './components/DataTable';
import ButtonValue from './components/ButtonValue';
import { useFetchUsers2 } from './hooks';


const tableHeaders = [
  'Surname',
  'Name',
  'Gender',
  'Nationality',
  'Age',
  'Location'
]

function App() {
  const { data, errorText, loading} = useFetchUsers2();
    return (
    <div className="App">
      <div>
      <ButtonValue />
      </div>
      {!!errorText && (
          <div className='error'>
          {errorText}
        </div>
        )}
         { loading && (
          <div className='loading'>
          fetching Data...
        </div>
        )}
        <DataTable headers={tableHeaders} users={data}/>
    </div>
  );
}
export default App;
