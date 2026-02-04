import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from "./UseLocalStorage";
const useChat = () => {
  

  const {chatMessages, setChatMessages, users, setUsers } = useLocalStorage()
  const [selectedChatId, setSelectedChatId] = useState(0);

  const selectChat = (userId) => {
    setSelectedChatId(userId);
    const selectedUser = users.find((user) => user.id === userId);

    const userMessages = selectedUser.messages;

    setChatMessages(userMessages);
  };

  const sendMessage = (textMessage) => {
      if (!textMessage.trim()) return;
      const newMessage = {
        id: uuidv4(),
        sender: 'me',
        text: textMessage,
        createdAt: new Date().toISOString(),
        status: "sent",
        avatar: "/img/avatar.png",
      }
  
      setChatMessages(prev => {
        const updated = [...prev, newMessage]
        return updated
      })
  
      const usersUpdated = users.map((user)=>{
        if (user.id===selectedChatId) {
          return{
            ...user,
            messages: [...user.messages,newMessage],
            lastMessage:{
              ...newMessage,
              count:0,
            }
          }
        } return user
      })
      setUsers(usersUpdated) 
    }
  
    const [sortMessages,setSortMessages] = useState('newest')

      // useEffect(() => {     ECHO
  //   const lastMessage = chatMessages[chatMessages.length - 1];


  //   setTimeout(() => {
  //     if (lastMessage.sender === 'other') return;
  //     const newMessage = {
  //       id: uuidv4(), sender: 'other',
  //       text: lastMessage.text,
  //       createdAt: new Date().toISOString(),
  //       status: "sent",
  //       avatar: "/img/avatar.png",
  //     }

  //     setChatMessages(prev => {
  //       const updated = [...prev, newMessage]
  //       localStorage.setItem('localMessages', JSON.stringify(updated))
  //       return updated;
  //     })
  //   }, 1500)

  // }, [chatMessages])

  return{
    users,
    selectChat,
    selectedChatId,
    chatMessages,
    setChatMessages,
    sendMessage,
  }
};
export default useChat;
