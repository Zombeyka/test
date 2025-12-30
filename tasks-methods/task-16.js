const articles = [
    { id: 1, title: 'First Article' },
    { id: 2, title: 'Second Article' },
    { id: 3, title: 'Third Article' }
];
// const joinArticleTitles = articles.reduce((accumulator, element) => `${accumulator}, ${element.title}`, ' ');
const articlesToString = articles.map((article) => article.title).join(', ');
console.log(articlesToString);
// const joinArticleTitles = articles.join(', ').
// console.log(joinArticleTitles);
// Сделать без запятой в начале