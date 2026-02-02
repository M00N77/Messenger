import clsx from 'clsx';
import formatTime from "../../utiils/formatTime.js"
interface MessageItem{
    
}


const MessageItem = ({ sms }) => {
    const { sender, text, date } = sms;
   
    const isMe = sms.sender === 'me'
    return (
            <div className={clsx("flex  items-center gap-x-1",isMe?"justify-end":"flex justify-start")}>
                
                <div className={clsx("flex  py-2 px-4 rounded-2xl  w-auto max-w-1/3  text-white " ,isMe? "bg-green-500" : "bg-gray-500 order-1")}>
                    <p>{text}</p>
                    <span className="text-xs ml-2 self-end font-light justify-end">{formatTime(date)}</span>
                </div>

                <img src="img/avatar.png" alt="" className="flex self-end items-end w-7 h-7 " />
            </div>

            
    )





}
export default MessageItem