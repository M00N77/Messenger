import SideBar from "./SideBar"

import Chat from "./Chat"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';


const AuthenticatedApp = () => {

  const initMessages = JSON.parse(localStorage.getItem('localMessages')) || []
  const initUsers = JSON.parse(localStorage.getItem('localUsers')) || 
  [
    {
      id: 1,
      name: "Travis Barker",
      avatar: "/img/avatar.png",
      isOnline: true,
      isTyping: true,

      lastMessage: {
        count: 2,
        text: "See you later!",
        createdAt: "2023-10-27T16:45:00.000Z",
        status: "read",
      },
      
      messages: [
        {
          id: 'm1-1',
          sender: 'other',
          text: "Hi! How are you?",
          createdAt: "2023-10-27T10:00:00.000Z",
          status: "read",
          avatar: "/img/avatar.png"
        },
        {
          id: 'm1-2',
          sender: 'me',
          text: "I'm fine, thanks! And you?",
          createdAt: "2023-10-27T10:05:00.000Z",
          status: "read",
          avatar: "/img/my-avatar.png"
        },
        {
          id: 'm1-3',
          sender: 'other',
          text: "See you later!",
          createdAt: "2023-10-27T16:45:00.000Z",
          status: "read",
          avatar: "/img/avatar.png"
        }
      ]
    },
    {
      id: 2,
      name: "Kate Rose",
      avatar: "/img/avatar_2.png",
      isOnline: false,
      isTyping: false,
      lastMessage: {
        count: 1,
        text: "Did you send the report?",
        createdAt: "2023-10-27T14:20:00.000Z",
        status: "delivered",
      },
      messages: [
        {
          id: 'm2-1',
          sender: 'me',
          text: "Hey Kate, I finished the design.",
          createdAt: "2023-10-26T09:00:00.000Z",
          status: "read",
          avatar: "/img/my-avatar.png"
        },
        {
          id: 'm2-2',
          sender: 'other', // Kate
          text: "Great! Did you send the report?",
          createdAt: "2023-10-27T14:20:00.000Z",
          status: "delivered",
          avatar: "/img/avatar_2.png"
        }
      ]
    },
  ];

  const [chatMessages, setChatMessages] = useState(initMessages)

  const [users,setUsers] = useState(initUsers);
  const [selectedChatId,setSelectedChatId] = useState(0)

  const selectChat = (userId) => {
    setSelectedChatId(userId)
    const [selectedUser] = users.filter(user => (user.id === userId));

    const userMessages = selectedUser.messages

    localStorage.setItem('localMessages', JSON.stringify(userMessages))
    setChatMessages(userMessages)
  }

  useEffect(() => {
    const lastMessage = chatMessages[chatMessages.length - 1];


    setTimeout(() => {
      if (lastMessage.sender === 'other') return;
      const newMessage = {
        id: uuidv4(), sender: 'other',
        text: lastMessage.text,
        createdAt: new Date().toISOString(),
        status: "sent",
        avatar: "/img/my-avatar.png",
      }

      setChatMessages(prev => {
        const updated = [...prev, newMessage]
        localStorage.setItem('localMessages', JSON.stringify(updated))
        return updated;
      })
    }, 1500)

  }, [chatMessages])

  const sendMessage = (textMessage) => {
    if (!textMessage.trim()) return;
    const newMessage = {
      id: uuidv4(),
      sender: 'me',
      text: textMessage,
      createdAt: new Date().toISOString(),
      status: "sent",
      avatar: "/img/my-avatar.png",
    }

    setChatMessages(prev => {
      const updated = [...prev, newMessage]
      localStorage.setItem('localMessages', JSON.stringify(updated))
      return updated
    })

  }

  return (
    <div className='grid grid-cols-[350px_1fr]' >
      <SideBar
        users={users}
        onSelectChat={selectChat}
        selectedChatId={selectedChatId}
      />
      <Chat
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        onSendMessage={sendMessage}
      />
    </div>
  )
}
export default AuthenticatedApp