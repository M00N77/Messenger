import ChatItem from "./ChatItem";


const ChatList = () => {

    const users = [
        {
            id: 1,
            name: "Travis Barker",
            avatar: "/public/img/avatar.png",
            isOnline: true,
            isTyping: true,
            lastMessage: {
                count: 2,
                text: "See you later!",
                time: "16:45",
                status: "read",
            }
        },
        {
            id: 2,
            name: "Kate Rose",
            avatar: "/public/img/avatar.png",
            isOnline: false,
            isTyping: false,
            lastMessage: {
                count: 2,
                text: "Did you send the report?",
                time: "14:20",
                status: "delivered",
            }
        },
        {
            id: 3,
            name: "John Doe",
            avatar: "/public/img/avatar.png",
            isOnline: true,
            isTyping: false,
            lastMessage: {
                count: 2,
                text: "Ok, thanks.",
                time: "Yesterday",
                status: "sent",
            }
        },
        {
            id: 4,
            name: "Sarah Connor",
            avatar: "/public/img/avatar.png",
            isOnline: false,
            isTyping: false,
            lastMessage: {
                count: 2,
                text: "I'll be back 👍",
                time: "Mon",
                status: "read",
            }
        },
        {
            id: 5,
            name: "Sarah Connor",
            avatar: "/public/img/avatar.png",
            isOnline: false,
            isTyping: false,
            lastMessage: {
                count: 2,
                text: "I'll be back 👍",
                time: "Mon",
                status: "read",
            }
        },
        {
            id: 6,
            name: "Sarah Connor",
            avatar: "/public/img/avatar.png",
            isOnline: false,
            isTyping: false,
            lastMessage: {
                count:2,
                text: "I'll be back 👍",
                time: "Mon",
                status: "read",
            }
        },{
            id: 7,
            name: "Sarah Connor",
            avatar: "/public/img/avatar.png",
            isOnline: false,
            isTyping: false,
            lastMessage: {
                count:2,
                text: "I'll be back 👍",
                time: "Mon",
                status: "read",
            }
        },
        {
            id: 8,
            name: "Sarah Connor",
            avatar: "/public/img/avatar.png",
            isOnline: false,
            isTyping: false,
            lastMessage: {
                count:2,
                text: "I'll be back 👍",
                time: "Mon",
                status: "read",
            }
        },
        {
            id: 9,
            name: "Sarah Connor",
            avatar: "/public/img/avatar.png",
            isOnline: false,
            isTyping: false,
            lastMessage: {
                count:2,
                text: "I'll be back 👍",
                time: "Mon",
                status: "read",
            }
        },
        {
            id: 10,
            name: "Sarah Connor",
            avatar: "/public/img/avatar.png",
            isOnline: false,
            isTyping: false,
            lastMessage: {
                count:2,
                text: "I'll be back 👍",
                time: "Mon",
                status: "read",
            }
        },
        {
            id: 11,
            name: "Sarah Connor",
            avatar: "/public/img/avatar.png",
            isOnline: false,
            isTyping: false,
            lastMessage: {
                count:2,
                text: "I'll be back 👍",
                time: "Mon",
                status: "read",
            }
        },
        {
            id: 12,
            name: "Sarah Connor",
            avatar: "/public/img/avatar.png",
            isOnline: false,
            isTyping: false,
            lastMessage: {
                count:2,
                text: "I'll be back 👍",
                time: "Mon",
                status: "read",
            }
        },
        {
            id: 13,
            name: "Sarah Connor",
            avatar: "/public/img/avatar.png",
            isOnline: false,
            isTyping: false,
            lastMessage: {
                count:2,
                text: "I'll be back 👍",
                time: "Mon",
                status: "read",
            }
        },
        {
            id: 14,
            name: "Sarah Connor",
            avatar: "/public/img/avatar.png",
            isOnline: false,
            isTyping: false,
            lastMessage: {
                count:2,
                text: "I'll be back 👍",
                time: "Mon",
                status: "read",
            }
        }
    ];

    return (
        <div  >
            {users.map((user) => (
                
                    <ChatItem user={user} key={user.id} />
                
            ))}
        </div>
    )
}
export default ChatList