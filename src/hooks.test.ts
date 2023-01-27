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

describe('userReducer function', ()=>{
    it('should return state if not known action type was passed', ()=>{
        const action = { type: 'xyz' };
        expect(userReducer(state, action)).toEqual(state)
    })
    //testowanie funkcji userReducer w przypadku kiedy typ akcji jest nieznany, oczekiwane zwrócenie stanu początkowego

    it('should return proper state on action failure', ()=>{
        const action = { type: 'failure', text: 'error text' };
        const expectedValue = {
            loading: false,
            errorText: 'error text',
            data: [] 
        }
        expect(userReducer(state, action)).toStrictEqual(expectedValue)
    })
    // testowanie funkcji userReducer w przypadku kiedy typem akcji jest niepowodzenie(ang.failure),
    // oczekiwane zwrócenie konkretnych wartości wymienionych w zmiennej expectedValue

    it('should return proper state on action success', ()=>{
        const localState = { ...state, loading: true };
        const action = { type: 'success', data: userData };
        const expectedValue = {
            loading: false,
            errorText: '',
            data: userData
        };
        expect (userReducer(localState, action)).toStrictEqual(expectedValue)
    })
     // testowanie funkcji userReducer w przypadku kiedy typem akcji jest sukces(ang.success), 
     //oczekiwane zwrócenie konkretnych wartości wymienionych w zmiennej expectedValue

    it('should return proper state on action loading',()=>{
        const action = { type:'loading' };
        const expectedValue = {
            loading: true,
            errorText: '',
            data: []
        };
        expect (userReducer(state, action)).toStrictEqual(expectedValue)
    })
     // testowanie funkcji userReducer w przypadku kiedy typem akcji jest ładowanie(ang.loading),
     // oczekiwane zwrócenie konkretnych wartości wymienionych w zmiennej expectedValue
})
