import { useEffect, useReducer, useState } from "react";
import { User } from "./types";

export interface UsersState {
    loading: boolean;
    errorText: string;
    data: User[]
}

const initialUserState: UsersState = {
    loading: false,
    errorText: '',
    data: []
}

export interface LoadingUserAction {
    type: string;
}

export interface SuccessUserAction {
    type: string;
    data: User[]
}

export interface FailureUserAction {
    type: string;
    text: string;
}

export type UserAction = LoadingUserAction | SuccessUserAction | FailureUserAction

export function userReducer(state: UsersState, action: UserAction){
    console.log(action);
    switch(action.type){
        case 'loading':
            return {
                ...state,
                loading: true
            }
        case 'success':
            return {
                ...initialUserState,
                data: (action as SuccessUserAction).data
            }
        case 'failure':
            return {
                ...state,
                loading: false,
                errorText: (action as FailureUserAction).text
            }
        default: 
            return state;
    }
}

export function useFetchUsers2(): UsersState{
    const [userState, dispatch] = useReducer(userReducer, initialUserState);

    useEffect(()=>{
        dispatch({ type: 'loading' });
        console.log('request');
        fetch('https://randomuser.me/api/?results=50&inc=name,gender,nat,dob,location,login')
        .then(async (response)=>{
            if(response.ok){
                const data = await response.json();
                dispatch({type: 'success', data: data.results})
                return
            }
            throw new Error('Something went wrong');
        })
        .catch((error)=>{
            dispatch({type: 'failure', text: error.message})
        })
    },[])

    return userState;
}

// export function useFetchUsers(){
//     const [userData, setUserData] = useState<User[]>([])
//     const [errorText, setErrorText] = useState<string>('')
//     const [loading, setLoading] = useState<boolean>(false)

//     useEffect(()=>{
//         setLoading(true);
//         fetch('https://randomuser.me/api/?results=50&inc=name,gender,nat,dob,location,login')
//         .then(async (response)=>{
//             if(response.ok){
//                 const data = await response.json();
//                 console.log(data);
//                 setUserData(data.results);
//                 setErrorText('');
//                 setLoading(false);
//             }
//         })
//         .catch((error)=>{
//             console.log(error);
//             setErrorText(error.message);
//             setLoading(false);
//         })
//     },[])
    
//     return {
//         userData,
//         errorText,
//         loading
//     }
// }