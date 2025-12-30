const tasks = [
    { id: 1, title: 'Task 1', priority: 'high' },
    { id: 2, title: 'Task 2', priority: 'low' },
    { id: 3, title: 'Task 3', priority: 'medium' },
    { id: 4, title: 'Task 4', priority: 'high' }
];
const getHighPriority = tasks.filter((element) => element.priority === 'high');
console.log(getHighPriority);
// Выполнил