import React, { useState } from 'react'

import _ from 'lodash'



export default function UserLogin({setUser}) {
  const [user , setAUser] = useState('')

  function handleSetUser(){
    if (!user) return
    localStorage.setItem('user', user)
    setUser(user)
    localStorage.setItem('avatar' ,`https://picsum.photos/id/${_.random(1, 1000)}/200/300` )
  }
  return (
    <>
    <div  style={{height:'70px'}} className='w-100 bg-secondary  shadow  '>
       <h3 className='text-light ' style={{margin:10, textAlign:'center'}}> <i class="fa-solid fa-message"></i> Chat App</h3>
    
      
    </div>

    <div style={{height:'100vh' }} className='w-100 d-flex   justify-content-center mt-5'>
    <input    style={{height:'50px' , border:'none'}}
                className='shadow '
                  value={user}
                  onChange={e=> setAUser(e.target.value)}
                  placeholder="Enter Username"
                  ></input>

                <div className='mt-2 ms-2 '> <button className='btn btn-success shadow ' onClick={()=>handleSetUser()}>Login</button></div>
    </div>
   
</>
  )
}
