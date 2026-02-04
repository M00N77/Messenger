import SideBar from "./SideBar"
import Chat from "./Chat"
import useChat from '../../hooks/useChat.js'


const AuthenticatedApp = () => {

  const {
    users,
    selectChat,
    selectedChatId,
    chatMessages,
    setChatMessages,
    sendMessage
  } = useChat()


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