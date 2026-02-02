import SideBar from "./SideBar"

import Chat from "./Chat"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


const AuthenticatedApp = () => {


  const initMessages = JSON.parse(localStorage.getItem('localMessages')) || []



  const [chatMessages, setChatMessages] = useState(initMessages)

  
  const sendMessage = (textMessage) => { 
    if(!textMessage.trim()) return;
    const newMessage = {
      id: uuidv4(),
      sender: 'me',
      text:textMessage,
      date: new Date().toISOString(),
      status: "sent",
      avatar: "/img/my-avatar.png",
    }

    setChatMessages(prev=>{
      const updated = [...prev,newMessage]
      localStorage.setItem('localMessages',JSON.stringify(updated))
      return updated 
    })
  }

  return (
    <div className='grid grid-cols-[350px_1fr]' >
      <SideBar />
      <Chat chatMessages={chatMessages} setChatMessages={setChatMessages} onSendMessage={sendMessage} />
    </div>
  )
}
export default AuthenticatedApp