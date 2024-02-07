import React, { useState } from 'react'


export default function Input({addMessage}) {
    const [message,setMessage] = useState()

    function addAMessage(){
        addMessage({
            message
        })
        setMessage('')
    }
  return (
    <div  className='d-flex align-align-items-baseline  justify-content-center w-100'  style={{height:'100vh', marginTop:'200px'}}>
        <div>
           <input className='form-control shadow'  rows={6} placeholder='Write a message...' value={message} onChange={e=>setMessage(e.target.value)} >
  
           </input>
        </div>
         <div><button className='btn btn-success ms-2 shadow ' onClick={()=> addAMessage()}>Send</button></div>
    </div>
  )
}
