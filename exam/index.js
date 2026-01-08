const { faker } = require("@faker-js/faker");
// функция с рандомным пользователем
// функция с циклом фор массив из 10 имен
// имена фильтруем по длине 5
// превращаем в массив объектов и добавляем эмейлы
// const createRandomUser = () => {
//     return {
//         user: faker.internet.username()
//     };
// };
// console.log(createRandomUser());

const getRandomUsers = (countUser) => {
    const data = [];
    for (let i = 0; i < countUser; i++) {
        let flag = false;
        let counter = 0;
        while (counter < countUser) {
            flag = true;
            counter++;
        }
        if (flag) {
            data.push(faker.person.firstName());
        }
    }

    // while in for. with flags 

    // while (counter < countUser) {
    //     const result = faker.person.firstName();
    //     let counter = 0;
    //     if (result.length <= 5) {
    //         data.push(result);
    //         counter++;
    //     }


    // return {
    //     name: data.filter(name => name.length <= 5),
    //     email: faker.internet.email()
    // };
    // const filtreredUsersNames = data.filter(name => name.length <= 5);
    const usersWithEmail = data.map((userName) => ({
        name: userName,
        email: faker.internet.email()
    }));
    return usersWithEmail;
};

console.log(getRandomUsers(5));

// внутри for - while (с флажком). 

// const getRandomUser = (minNameLength, maxNameLength) => {
//     const randomUser = faker.person.firstName();
//     if (randomUser.length <= maxNameLength && randomUser.length >= minNameLength) {
//         return randomUser;
//     }
//     return getRandomUser(minNameLength, maxNameLength);
// };
// console.log(getRandomUser(7, 8));