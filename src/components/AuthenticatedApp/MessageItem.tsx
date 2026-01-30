interface MessageItem{
    
}

const MessageItem = ({ sms }) => {
    const { sender, text, time } = sms;
    return (
        sms.sender === 'me' ?
            <div className="flex justify-end items-center gap-x-1">
                
                <div className="flex  py-2 px-4 rounded-2xl  w-auto max-w-1/3 'ml-auto bg-green-500 text-white">
                    <p>{text}</p>
                    <span className="text-xs ml-2 self-end font-light justify-end">{time}</span>
                </div>

                <img src="img/avatar.png" alt="" className="flex self-end items-end w-7 h-7" />
            </div>

            : <div className="flex justify-start items-center gap-x-1 ">
                
                    <img src="img/avatar.png" alt="" className="flex self-end items-end w-9 h-9" />
                
                <div className="flex  py-2 px-4 rounded-2xl w-auto max-w-1/3 'ml-auto bg-gray-500 text-white">
                    <p>{text}</p>
                    <span className="text-xs ml-2 self-end font-light justify-end">{time}</span>
                </div>
            </div>
    )





}
export default MessageItem