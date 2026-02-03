import MessageItem from "./MessageItem";
import getDateSeparator from "../../utiils/getDateSeparator.js"
import { useRef } from "react";



const Chat = ({ chatMessages, setChatMessages,onSendMessage }) => {

  const messageInput = useRef(null)
  

  const handleClick = () => {
    const textMessage = messageInput.current.value;
    onSendMessage(textMessage)
    messageInput.current.value='';
  }

  return (
    <div className="grid grid-rows-[1fr_60px] h-screen ">

      <div className="flex flex-col justify-end gap-y-4 px-4 py-2 overflow-y-auto  ">
        {chatMessages.map((sms, index) => {
          const prevDate = index > 0 ? chatMessages[index - 1].createdAt : null;
          return (
            <div key={sms.id} className="flex flex-col gap-y-3" >
              <div className="flex justify-center items-center w-full h-4 ">

                <p className=" text-gray-500 font-light" >{getDateSeparator(sms.createdAt, prevDate)}</p>

              </div>
              <MessageItem sms={sms} />
            </div>
          )

        })}
      </div>


      <div className="bg-gray-100 grid grid-cols-[70px_1fr_150px] px-2 py-2 ">
        <button className="flex justify-center items-center" >
          <img src="img/add_file_icon.png" alt="" className="w-7 " />
        </button>
        <input 
        ref={messageInput} 
        type="text" 
        placeholder="Type your message..." 
        className="bg-gray-200 rounded-2xl px-4" 
        />

        <button
          className="flex justify-center items-center text-green-500 font-medium"
          onClick={handleClick}
        >

          Send message
        </button>



      </div>
    </div>
  )
}
export default Chat