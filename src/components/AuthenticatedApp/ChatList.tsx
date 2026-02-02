import ChatItem from "./ChatItem";


const ChatList = ({ users,onSelectChat }) => {

    


    return (
        <div  >
            {users.map((user) => (

                <ChatItem
                    user={user}
                    key={user.id}
                    onSelectChat={onSelectChat}/>

            ))}
        </div>
    )
}
export default ChatList