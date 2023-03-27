import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Mock = jest.Mock;
import { useFetchUsers2 } from './hooks';
import { userData } from './testHelper';

jest.mock('./hooks.ts', ()=>{
  const originalModule = jest.requireActual('./hooks.ts');
  return {
    __esModule: true,
    ...originalModule,
    useFetchUsers2: jest.fn()
  }
})

describe('<App />',()=>{
  it('should render fetchingData loading is true', () => {
    (useFetchUsers2 as Mock).mockReturnValue({loading: true, data: []})
    render(<App />);

    expect(screen.getByText('fetching Data...')).toBeInTheDocument();
  });
  it('should render errorText if provided', () => {
    (useFetchUsers2 as Mock).mockReturnValue({loading: false, data: [], errorText: 'error'})
    render(<App />);

    expect(screen.getByText('error')).toBeInTheDocument();
  });
  it('should render fetchingData loading is true', () => {
    (useFetchUsers2 as Mock).mockReturnValue({loading: false, data: userData})
    render(<App />);

    expect(screen.getAllByRole('row')).toHaveLength(2);
  });
})
