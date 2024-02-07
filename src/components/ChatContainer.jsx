import React, { useEffect, useState } from 'react'
import socketIOClient from "socket.io-client";
import UserLogin from './UserLogin';
import ChatBoxReciever, { ChatBoxSender } from './ChatBox';
import  Input  from './Input';


export default function ChatContainer() {

  let socketio = socketIOClient("http://localhost:5001")

  const [chats , setChats] = useState([])
  const [user, setUser] = useState(localStorage.getItem("user"))
  const [avatar , setAvatar] = useState(localStorage.getItem("avatar"))

  useEffect(()=>{
   socketio.on('chat', senderChats =>{
     setChats(senderChats)
   })
  })

  function sendChatToSocket(chat){
      socketio.emit("chat" , chat)
  }

  function addMessage(chat){
   const newChat ={...chat ,user , avatar}
   setChats([...chats , ])
   sendChatToSocket([...chats , newChat])

  }
  function logout(){
   localStorage.removeItem('user')
   localStorage.removeItem('avatar')
   setUser("")
  }
   
   function ChatsList(){
     return chats.map((chat , index)=>{
       if (chat.user === user) return  <ChatBoxSender  key={index} message={chat.message} avatar={chat.avatar} user={chat.user} />
       return <ChatBoxReciever key={index} message={chat.message} avatar={chat.avatar} user={chat.user} />
     })
   }

  return (
    <div>
    { 
    user?
    <div className=''>

    <div style={{height:'70px'}} className='w-100 bg-secondary  shadow  d-flex  flex-row justify-content-between  '>
     <div className='mt-3 ms-5'><h5 className='text-light'>Username : {user}</h5></div>
     <h3 className='text-light ' style={{margin:10, textAlign:'center'}}> <i class="fa-solid fa-message"></i> Chat App</h3>

    <div className='me-5 mt-3'> <button onClick={()=> logout()} className='btn btn-danger '>Log Out</button></div>
     </div>

     <ChatsList/>
     <Input  addMessage = {addMessage}/>
    </div>
    : 
    <UserLogin setUser = {setUser} />
}

 </div>
  )
}
