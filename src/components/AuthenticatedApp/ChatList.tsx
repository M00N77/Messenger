import ChatItem from "./ChatItem";


const ChatList = ({ users,onSelectChat,selectedChatId }) => {

    

    
    return (
        <div>
            {users.map((user) => {
                const isActive = user.id ===selectedChatId
                return(
                    <ChatItem
                    user={user}
                    key={user.id}
                    isActive={isActive}
                    onSelectChat={onSelectChat}
                    selectedChatId={selectedChatId}
                    />
                )
                

            })}
        </div>
    )
}
export default ChatList