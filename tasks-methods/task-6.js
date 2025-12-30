const words = ['Hello', 'world', 'from', 'JavaScript'];
// const createSentence = words.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`);
// console.log(createSentence);
// Выполнил, но криво. Нужно понять, как сделать с map(никак)
// Переписать через .join()
const createSentence = words.join(' ');
console.log(createSentence);
