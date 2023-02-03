import { render } from "@testing-library/react";
import { userReducer, UserAction, UsersState } from "./hooks";

export type UseCase = [
  string,
  UsersState,
  UserAction,
  UsersState
]

const state: UsersState = {
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

const useCases: UseCase[] = [
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
    it.each(useCases)('should return %s', (description: string, state: UsersState, action: UserAction, expected: UsersState)=>{
       expect(userReducer(state, action)).toEqual(expected)
    })
  //  useCases.forEach((useCase)=>{
  //      it('should return ' + useCase[0], ()=>{
   //         expect(userReducer(useCase[1], useCase[2])).toEqual(useCase[3])
  //      })
  // })
})