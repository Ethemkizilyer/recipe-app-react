import React from 'react'
import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
import PrivateRouter from '../router/PrivateRouter';
import { useEffect } from 'react';

const Login = () => {
    const [ert,setErt] = useState()
    const [asd,setAsd] = useState("")
    const [as,setAs] = useState("")
    const navigate= useNavigate()
    
    const[mazlum,setMazlum] =useState("true")
    const[ma,setMa] =useState()

    const oyun = ()=> {
       setErt(true);
        if(asd && as){
           
        return (navigate("/home"), { state:"ert" })}
        else{
            alert("eksik giriş")
        //    return navigate("/"); 
        }


    }

    // useEffect(()=> {console.log(asd)

    // },[asd])
  return (
    <div className='ethem'>
      <form className='eth' onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label>Email address</label><br />
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setAsd(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label><br />
          <input type="text" placeholder="Password" onChange={(e) => setAs(e.target.value)}/>
        </div>

        <button className='btn btn-primary'
          variant="primary"
          onClick={() => oyun()}
        >
          Submit
        </button>
       
      </form>
       {/* {ert && <PrivateRouter ert={ert}/>}   */}
    </div>
  );
}

export default Login