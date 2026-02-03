import type { User } from 't'
import clsx from 'clsx';
import formatTime from "../../utiils/formatTime"

interface ChatItemProps {
    user: User,
    onSelectChat: (id: number) => void,
    isActive: boolean,

}

const ChatItem = ({ user, onSelectChat, isActive }: ChatItemProps) => {
    const { name, avatar, isOnline,lastMessage } = user;
    
    return (
        <div onClick={() => onSelectChat(user.id)} className={clsx(isActive ? "bg-amber-50" : "")}>
            <div className="flex justify-between py-2 px-2" >
                <div className="flex justify-center items-center gap-x-2" >
                    <div className="relative">
                        <img src={avatar} alt="" className="w-10 h-10 rounded-full" />
                        {isOnline && <div className=" absolute right-0 bottom-0 border-3 border-green-500 w-3 h-3 bg-green-500 rounded-full" ></div>} 
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="text-xl" >{name}</p>
                        {<p className="text-gray-500" >{lastMessage.text}</p>}

                    </div>
                </div>

                <div className="flex flex-col justify-between items-end ">
                    {lastMessage.count === 0 ? (
                        <>
                            <p className="text-gray-500 " >{formatTime(lastMessage.createdAt)}</p>
                            {lastMessage.status === 'sent' && <span className="text-blue-300 " >✓</span>}
                            {lastMessage.status === 'read' && <span className="text-blue-500" >✓✓</span>}
                        </>
                    ) : (
                        <>
                            <p className="text-gray-500" >{formatTime(lastMessage.createdAt)}</p>
                            <span className="flex items-center justify-center bg-green-600 w-6 h-6 text-center text-white rounded-full" >{lastMessage.count}</span>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}
export default ChatItem