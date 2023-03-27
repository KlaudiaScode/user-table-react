import { renderHook, waitFor } from "@testing-library/react";
import { userReducer, UserAction, UsersState, useFetchUsers2 } from "./hooks";
import { useCases, userData } from "./testHelper";


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
//mokowanie globalnej funkcji śledzącej o nazwie fetch
jest.spyOn(global,'fetch');

describe('useFetchUsers2 hook',()=>{
  it('should return loading true when hook is rendered',()=>{
    global.fetch = jest.fn((): Promise<Response>=>Promise.resolve({}as unknown as Response));
    const {result} = renderHook(()=>useFetchUsers2());

    expect(result.current.loading).toBe(true);
  })
  it('should return correct data',async()=>{
    global.fetch = jest.fn((): Promise<Response>=>Promise.resolve({
      ok: true,
      json: ()=>Promise.resolve({
        results: userData,
      })
    } as unknown as Response))
    const {result} = renderHook(()=>useFetchUsers2())

    expect(result.current.data).toHaveLength(0)
    await waitFor(()=>expect (result.current.loading).toBe(false))
    expect(result.current.data).toHaveLength(1)
  })
  it('should return error message',async()=>{
    const error = new Error('Failed');
    global.fetch = jest.fn((): Promise<Response>=>Promise.reject(error as unknown as Response));
    const {result} = renderHook(()=>useFetchUsers2());

    expect(result.current.errorText).toBe('')
    await waitFor(()=>expect (result.current.loading).toBe(false))
    expect(result.current.errorText).toBe('Failed')
  })
})

//Przeanalizować fetch w kodzie i w jaki sposób został zamokowany w testach
