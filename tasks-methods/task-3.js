const nums = [1, 2, 3, 4, 5];
// const getSquare = nums.map((nums) => nums ** 2);
// console.log(getSquare); 
// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i] ** 2);
// }
nums.forEach((num, index) => {
    nums[index] **= 2;
});
console.log(nums);
// Выполнил