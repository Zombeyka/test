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

const getRandomUsers = (countUser) => {
    const data = [];
    for (let i = 0; i < countUser; i++) {
        data.push(faker.person.firstName());
    }
    return {
        name: data.filter(name => name.length <= 5),
        email: faker.internet.email()
    };
};

console.log(getRandomUsers(5));

// const shortNames = () => {
//     const data = [];
//     data.map((faker.person.fullName()));
//     return data;
// };
// console.log(shortNames(""));
