// nested Distructing

const users = [
    {userId: 1, firstName: 'harshit', gender: 'male'},
    {userId: 2, firstName: 'mohit', gender: 'male'},
    {userId: 3, firstName: 'nitish', gender: 'male'},
];

// const [{firstName:user1FirstName,userId}, ,{gender:user3Gender}]  = users;
const [{firstName:user1FirstName,userId}, ,{gender:user3Gender}]  = users;
console.log(user1FirstName);
console.log(userId);
console.log(user3Gender);
    