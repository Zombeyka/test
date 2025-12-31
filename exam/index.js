const { faker } = require("@faker-js/faker");
// функция с рандомным пользователем
// функция с циклом фор массив из 10 имен
// имена фильтруем по длине 5
// превращаем в массив объектов и добавляем эмейлы
const createRandomUser = () => {
    return {
        user: faker.internet.username()
    };
};
// console.log(createRandomUser());

// const getRandomUsers = (countUser) => {
//     const data = [];
//     for (let i = 0; i < countUser; i++) {
//         data.push(faker.person.firstName());
//     }
//     // return {
//     //     name: data.filter(name => name.length <= 5),
//     //     email: faker.internet.email()
//     // };
//     const filtreredUsersNames = data.filter(name => name.length <= 5);
//     const usersWithEmail = filtreredUsersNames.map((userName) => ({
//         name: userName,
//         email: faker.internet.email()
//     }));
//     return usersWithEmail;
// };

// console.log(getRandomUsers(20));

// внутри for - while (с флажком). 

// const getRandomUser = (minNameLength, maxNameLength) => {
//     const randomUser = faker.person.firstName();
//     if (randomUser.length <= maxNameLength && randomUser.length >= minNameLength) {
//         return randomUser;
//     }
//     return getRandomUser(minNameLength, maxNameLength);
// };
// console.log(getRandomUser(7, 8));