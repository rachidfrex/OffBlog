import React from 'react'
import { UserContext } from "./useContext";
import { useContext } from 'react';
import { useEffect } from 'react';

function Gettheuserglobale() {
    const { setUsercontext } = useContext(UserContext);
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("user-info"));
        const user_id = userInfo ? userInfo.user_id : null;
        const getUser = async () => {
          let result = await fetch(`http://localhost:8000/api/user/${user_id}`, {
            method: "GET",
          });
          result = await result.json();
          console.log(result.user);
          console.log(user);
          setUsercontext(result.user);
    
    
        
        };
        getUser();
      }, []);
  return (
    <div>
    </div>
  )
}

export default Gettheuserglobale