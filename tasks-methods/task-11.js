const chats = [
    { id: 1, unread: 5 },
    { id: 2, unread: 0 },
    { id: 3, unread: 12 },
    { id: 4, unread: 3 }
];
const countTotalUnreadMessages = chats.reduce((accumulator, chat) => accumulator + chat.unread, 0);
console.log(countTotalUnreadMessages);
// Не выполнил сам