import { useEffect, useState } from "react";

export function useFetchUsers(){
    const [userData, setUserData] = useState([])

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=50&inc=name,gender,nat,dob,location,login')
        .then(async (response)=>{
            if(response.ok){
                const data = await response.json();
                console.log(data);
                setUserData(data.results)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
    
    return {
        userData
    }
}
