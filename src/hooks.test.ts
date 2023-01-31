import { render } from "@testing-library/react";
import { userReducer } from "./hooks";
//importowanie potrzebnych {imiennych}plików

const state = {
    loading: false,
    errorText: '',
    data: []
}

const userData = [
    {
        name: {
            first: 'Klaudia',
            last: 'Sagan',
          },
          gender: 'Kobieta',
          nat: 'Polska',
          dob: {
            age: 25,
          },
          location:{
            state: 'Lubelskie',
            country: 'Polska',
          },
          login: {
            uuid: '123',
          },
    }
]
//stworzenie dwóch ogólnodostępnych zmiennych z danymi

const useCases = [
    [   'state if not known action type was passed',
        state, { type: 'xyz' }, state],
    [   'proper state on action failure',
        state, { type: 'failure', text: 'error text' }, {
        loading: false,
        errorText: 'error text',
        data: [] 
    }],
    [   'proper state on action success',
        { ...state, loading: true }, { type: 'success', data: userData }, {
        loading: false,
        errorText: '',
        data: userData
    }],
    [   'proper state on action loading',
        state, { type:'loading' }, {
        loading: true,
        errorText: '',
        data: []
    }]
]

describe('userReducer function',()=>{
    it.each(useCases)('should return %s', (description, state, action, expected)=>{
       expect(userReducer(state, action)).toEqual(expected)
    })
  //  useCases.forEach((useCase)=>{
  //      it('should return ' + useCase[0], ()=>{
   //         expect(userReducer(useCase[1], useCase[2])).toEqual(useCase[3])
  //      })
  // })
})
//PD: Jak naprawić podkreślone parametry w ts
//PD: commit