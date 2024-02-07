import React from 'react'
import {Avatar , Image} from 'antd'

export default function ChatBoxReciever({avatar , user , message}) {
    return (
      <div   style={{display:'flex' , flexDirection:'row',justifyContent:'flex-start' , marginLeft:'30px', padding:'10px'}} >
         <Avatar
         size={50}
         src={<Image 
         src={avatar}
         
         style={{ width:'50px', height:'50px', objectFit:'cover'}}
         preview={false}
         
         />}
         
         />   
  
         <p className='shadow ms-2' style={{padding:'10px' , backgroundColor:'#dcf8c6',  maxWidth:'60%', width:'10%', boxShadow:'10px 10px 5px lightblue', borderRadius:'6px' , }}>
          <strong style={{fontSize:'13'}}>
                    {user}
          </strong> <br /> 
          {message}
         </p>
      </div>
    )
  }

export function ChatBoxSender({avatar , user , message}) {
    return (
      <div  className='me-4'   style={{display:'flex' , flexDirection:'row',justifyContent:'flex-end' , marginLeft:'30px', padding:'10px'}} >
         <Avatar
         size={50}
         src={<Image 
         src={avatar}
         
         style={{ width:'50px', height:'50px', objectFit:'cover'}}
         preview={false}
         
         />}
         
         />   
  
         <p className='shadow ms-2' style={{padding:'10px' , backgroundColor:'#ffff',  maxWidth:'60%', width:'10%', boxShadow:'10px 10px 5px lightblue', borderRadius:'6px' , }}>
          <strong style={{fontSize:'13'}}>
                    {user}
          </strong> <br /> 
          {message}
         </p>
      </div>
    )
  }
