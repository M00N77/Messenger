const MessageItem = ({sms}) => {
    const {sender,text,time} = sms;
    
    return (
        <div

            className={`flex flex-1 py-2 px-4 rounded-2xl max-w-1/3 ${sender === 'me'
                ? 'ml-auto bg-green-500 text-white'
                : 'mr-auto bg-gray-500 text-white'
                }`}
        >
            <p>{text}</p>
            <span className="text-xs ml-2 mt-auto font-light">{time}</span>
        </div>
    )
}
export default MessageItem