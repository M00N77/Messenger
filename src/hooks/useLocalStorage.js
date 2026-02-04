import { useEffect, useState } from "react";

const useLocalStorage = () => {
  const initMessages = JSON.parse(localStorage.getItem("localMessages")) || [];

  const initUsers = JSON.parse(localStorage.getItem("localUsers")) || [
    {
      id: 1,
      name: "Travis Barker",
      avatar: "/img/avatar.png",
      isOnline: true,
      isTyping: true,
      lastMessage: {
        count: 2,
        text: "See you later!",
        createdAt: "2023-10-27T16:45:00.000Z",
        status: "read",
      },
      messages: [
        {
          id: "m1-1",
          sender: "other",
          text: "Hi! How are you?",
          createdAt: "2023-10-27T10:00:00.000Z",
          status: "read",
          avatar: "/img/avatar.png",
        },
        {
          id: "m1-2",
          sender: "me",
          text: "I'm fine, thanks! And you?",
          createdAt: "2023-10-27T10:05:00.000Z",
          status: "read",
          avatar: "/img/avatar.png",
        },
        {
          id: "m1-3",
          sender: "other",
          text: "See you later!",
          createdAt: "2023-10-27T16:45:00.000Z",
          status: "read",
          avatar: "/img/avatar.png",
        },
      ],
    },
    {
      id: 2,
      name: "Kate Rose",
      avatar: "/img/avatar_2.png",
      isOnline: false,
      isTyping: false,
      lastMessage: {
        count: 1,
        text: "Did you send the report?",
        createdAt: "2023-10-27T14:20:00.000Z",
        status: "delivered",
      },
      messages: [
        {
          id: "m2-1",
          sender: "me",
          text: "Hey Kate, I finished the design.",
          createdAt: "2023-10-26T09:00:00.000Z",
          status: "read",
          avatar: "/img/avatar.png",
        },
        {
          id: "m2-2",
          sender: "other",
          text: "Great! Did you send the report?",
          createdAt: "2023-10-27T14:20:00.000Z",
          status: "delivered",
          avatar: "/img/avatar_2.png",
        },
      ],
    },
    {
      id: 3,
      name: "Michael Chen",
      avatar: "/img/avatar.png",
      isOnline: true,
      isTyping: false,
      lastMessage: {
        count: 0,
        text: "Let's meet at 10 AM.",
        createdAt: "2023-10-28T08:15:00.000Z",
        status: "read",
      },
      messages: [
        {
          id: "m3-1",
          sender: "other",
          text: "Are we still on for the meeting?",
          createdAt: "2023-10-28T08:00:00.000Z",
          status: "read",
          avatar: "/img/avatar.png",
        },
        {
          id: "m3-2",
          sender: "me",
          text: "Yes, definitely.",
          createdAt: "2023-10-28T08:10:00.000Z",
          status: "read",
          avatar: "/img/avatar.png",
        },
        {
          id: "m3-3",
          sender: "other",
          text: "Let's meet at 10 AM.",
          createdAt: "2023-10-28T08:15:00.000Z",
          status: "read",
          avatar: "/img/avatar_2.png",
        },
      ],
    },
    {
      id: 4,
      name: "Sarah Jenkins",
      avatar: "/img/avatar_2.png",
      isOnline: false,
      isTyping: false,
      lastMessage: {
        count: 5,
        text: "Thanks for the help!",
        createdAt: "2023-10-25T18:30:00.000Z",
        status: "sent",
      },
      messages: [
        {
          id: "m4-1",
          sender: "me",
          text: "I sent you the files via email.",
          createdAt: "2023-10-25T18:00:00.000Z",
          status: "read",
          avatar: "/img/avatar.png",
        },
        {
          id: "m4-2",
          sender: "other",
          text: "Got them. Checking now.",
          createdAt: "2023-10-25T18:15:00.000Z",
          status: "read",
          avatar: "/img/avatar_2.png",
        },
        {
          id: "m4-3",
          sender: "other",
          text: "Thanks for the help!",
          createdAt: "2023-10-25T18:30:00.000Z",
          status: "read",
          avatar: "/img/avatar_2.png",
        },
      ],
    },
    {
      id: 5,
      name: "Project Alpha Team",
      avatar: "/img/avatar.png",
      isOnline: true,
      isTyping: false,
      lastMessage: {
        count: 0,
        text: "Deadline is pushed to Friday.",
        createdAt: "2023-10-28T11:00:00.000Z",
        status: "read",
      },
      messages: [
        {
          id: "m5-1",
          sender: "other",
          text: "Updates on the backend?",
          createdAt: "2023-10-28T10:30:00.000Z",
          status: "read",
          avatar: "/img/avatar_5.png",
        },
        {
          id: "m5-2",
          sender: "me",
          text: "Deployment is in progress.",
          createdAt: "2023-10-28T10:45:00.000Z",
          status: "read",
          avatar: "/img/avatar.png",
        },
        {
          id: "m5-3",
          sender: "other",
          text: "Deadline is pushed to Friday.",
          createdAt: "2023-10-28T11:00:00.000Z",
          status: "read",
          avatar: "/img/avatar_6.png",
        },
      ],
    },
  ];
  const [chatMessages, setChatMessages] = useState(initMessages);

  const [users, setUsers] = useState(initUsers);

  useEffect(() => {
    localStorage.setItem("localUsers", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("localMessages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  return {
    chatMessages,
    setChatMessages,
    users,
    setUsers,
  };
};
export default useLocalStorage;
