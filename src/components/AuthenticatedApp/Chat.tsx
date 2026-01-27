import MessageItem from "./MessageItem";

const Chat = () => {
  const chatMessages = [
    {
      id: 1,
      sender: 'other', // Собеседник
      text: "Привет! Как продвигается проект?",
      time: "10:00",
      status: "read"
    },
    {
      id: 2,
      sender: 'me', // Я
      text: "Привет! Уже сделал список чатов, сейчас верстаю окно переписки.",
      time: "10:05",
      status: "read"
    },
    {
      id: 3,
      sender: 'other',
      text: "Круто! А как реализовал разделение сообщений?",
      time: "10:06",
      status: "read"
    },
    {
      id: 4,
      sender: 'me',
      text: "Через условные классы в Tailwind. Если sender === 'me', добавляю ml-auto и синий фон.",
      time: "10:07",
      status: "delivered"
    },
    {
      id: 5,
      sender: 'other',
      text: "Гениально 🔥 Жду скриншот!",
      time: "10:10",
      status: "sent"
    },
    {
      id: 4,
      sender: 'me',
      text: "Через условные классы в Tailwind. Если sender === 'me', добавляю ml-auto и синий фон.",
      time: "10:07",
      status: "delivered"
    },
    {
      id: 6,
      sender: 'other',
      text: "Гениально 🔥 Жду скриншот!",
      time: "10:10",
      status: "sent"
    },
    {
      id: 4,
      sender: 'me',
      text: "Через условные классы в Tailwind. Если sender === 'me', добавляю ml-auto и синий фон.",
      time: "10:07",
      status: "delivered"
    },
    {
      id: 6,
      sender: 'other',
      text: "Гениально 🔥 Жду скриншот!",
      time: "10:10",
      status: "sent"
    },
    {
      id: 4,
      sender: 'me',
      text: "Через условные классы в Tailwind. Если sender === 'me', добавляю ml-auto и синий фон.",
      time: "10:07",
      status: "delivered"
    },
    {
      id: 6,
      sender: 'other',
      text: "Гениально 🔥 Жду скриншот!",
      time: "10:10",
      status: "sent"
    },
    {
      id: 4,
      sender: 'me',
      text: "Через условные классы в Tailwind. Если sender === 'me', добавляю ml-auto и синий фон.",
      time: "10:07",
      status: "delivered"
    },
    {
      id: 6,
      sender: 'other',
      text: "Гениально 🔥 Жду скриншот!",
      time: "10:10",
      status: "sent"
    },
    {
      id: 4,
      sender: 'me',
      text: "Через условные классы в Tailwind. Если sender === 'me', добавляю ml-auto и синий фон.",
      time: "10:07",
      status: "delivered"
    },
    {
      id: 6,
      sender: 'other',
      text: "Гениально 🔥 Жду скриншот!",
      time: "10:10",
      status: "sent"
    },
    {
      id: 4,
      sender: 'me',
      text: "Через условные классы в Tailwind. Если sender === 'me', добавляю ml-auto и синий фон.",
      time: "10:07",
      status: "delivered"
    },
    {
      id: 6,
      sender: 'other',
      text: "Гениально 🔥 Жду скриншот!",
      time: "10:10",
      status: "sent"
    },
    
    
  ];

  return (
    <div className="grid grid-rows-[1fr_60px] h-screen ">
      
        <div className="flex flex-col flex-1 gap-y-4 px-4 py-2 overflow-y-auto  ">
          {chatMessages.map(sms => (
            <MessageItem sms={sms} key={sms.id} />
          ))}
        </div>
      

      <div className="bg-gray-100 grid grid-cols-[0px_1fr_150px] px-2 py-2 ">
        <button className="flex justify-center items-center" >
          <img src="/public/img/add_file_icon.png" alt="" className="w-6" />
        </button>
        <input type="text" placeholder="Type your message..." className="bg-gray-200 rounded-2xl px-4" />

        <button className="flex justify-center items-center text-green-500 font-medium" >
          Send message
        </button>



      </div>
    </div>
  )
}
export default Chat