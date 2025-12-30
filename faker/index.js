const { faker } = require('@faker-js/faker');
// console.log(faker.animal.cat())
// const createRandomUser = () => {
//     return {
//         userId: faker.string.uuid(),
//         username: faker.internet.username(),
//         email: faker.internet.email(),
//         avatar: faker.image.avatar(),
//         password: faker.internet.password(),
//         birthdate: faker.date.birthdate(),
//         registeredAt: faker.date.past(),
//     };
// }
// console.log(createRandomUser());

// создать с помощью faker массив из 10 пользователей

const names = ['petya', 'lena', 'max', 'jorawik', 'babaji', 'wiktoriba']
// names.push(faker.person.firstName())
const shortNames = (name) => {
    return name.filter((namess) => namess.length <= 5)

};
console.log(shortNames(names))
