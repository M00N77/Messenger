import SideBar from "./SideBar"

import Chat from "./Chat"



const AuthenticatedApp = () => {
  
const chatMessages = [
    // Самое новое (Сегодня, 10:12)
    {
      id: 6,
      sender: 'me',
      text: "И не забудь про ресайз сайдбара!",
      data: "2026-01-30T10:12:00", // Сегодня
      status: "sent",
      avatar: "/img/my-avatar.png"
    },
    // Сегодня, 10:10
    {
      id: 5,
      sender: 'other',
      text: "Гениально 🔥 Жду скриншот!",
      data: "2026-01-30T10:10:00", // Сегодня
      status: "sent",
      avatar: "/img/avatar.png"
    },
    // Вчера, 10:07
    {
      id: 4,
      sender: 'me',
      text: "Через условные классы в Tailwind. Если sender === 'me', добавляю ml-auto и синий фон.",
      data: "2026-01-29T10:07:00", // Вчера
      status: "delivered",
      avatar: "/img/my-avatar.png"
    },
    // Вчера, 10:06
    {
      id: 3,
      sender: 'other',
      text: "Круто! А как реализовал разделение сообщений?",
      data: "2026-01-29T10:06:00", // Вчера
      status: "read",
      avatar: "/img/avatar.png"
    },
    // Позавчера (28 Янв)
    {
      id: 2,
      sender: 'me',
      text: "Привет! Уже сделал список чатов, сейчас верстаю окно переписки.",
      data: "2026-01-28T10:05:00",
      status: "read",
      avatar: "/img/my-avatar.png"
    },
    // Давно (25 Янв)
    {
      id: 1,
      sender: 'other',
      text: "Привет! Как продвигается проект?",
      data: "2026-01-25T10:00:00",
      status: "read",
      avatar: "/img/avatar.png"
    }
  ];
  
  
  return (
    <div className='grid grid-cols-[350px_1fr]' >
        <SideBar />
        <Chat chatMessages={chatMessages} />
    </div>
  )
}
export default AuthenticatedApp