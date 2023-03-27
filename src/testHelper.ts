import { UsersState, UserAction } from "./hooks"

export type UseCase = [
    string,
    UsersState,
    UserAction,
    UsersState
  ]
  
  export const state: UsersState = {
      loading: false,
      errorText: '',
      data: []
  }
  
  export const userData = [
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
  
  export const useCases: UseCase[] = [
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