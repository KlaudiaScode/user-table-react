import React from 'react';
import {render, screen, waitFor, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DataTable from '../DataTable';

const tableHeaders = [
    'Surname',
    'Name',
    'Gender',
    'Nationality',
    'Age',
    'Location'
  ]

const user = [{
    name: {
      first: "Klaudia",
      last: "Sagan",
    },
    gender: "Female",
    nat: "Poland",
    dob: {
      age: 25,
    },
    location:{
      state: "Poland",
      country: "Poland",
    },
    login: {
      uuid: "xyz1",
    },
  },{
    name: {
      first: "Tom",
      last: "Gonzalez",
    },
    gender: "Male",
    nat: "France",
    dob: {
      age: 35,
    },
    location:{
      state: "Ille-et-Vilaine",
      country: "France",
    },
    login: {
      uuid: "xyz1235",
    },
  }]

describe ('<DataTable />', ()=>{
    it ('should render the components', ()=>{
        render(<DataTable headers={tableHeaders} users={[]} />);

        expect (screen.getByRole('table')).toBeInTheDocument();
        expect (screen.getAllByRole('columnheader')).toHaveLength(6);
        expect (screen.getAllByRole('row')).toHaveLength(1);
    });
    it ('should display user details', ()=>{
        render(<DataTable headers={[]} users={user} />);

        //One row for headers and two rows to Userdata
        expect (screen.getAllByRole('row')).toHaveLength(3);
        expect (screen.getByRole('row', { name: "Sagan Klaudia Female Poland 25 Poland"})).toBeInTheDocument();
        expect (screen.getByRole('cell',{name: "Female"})).toBeInTheDocument();
        expect (screen.getByRole('row', { name: "Gonzalez Tom Male France 35 France"})).toBeInTheDocument();
        expect (screen.getByRole('cell',{name: "Gonzalez"})).toBeInTheDocument();
    });
    
});