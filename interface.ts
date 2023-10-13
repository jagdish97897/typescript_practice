
// interface userType{
//     name:string,
//     age:number,
//     getName:()=>string
// }


// let users:userType={
//     name:"jagdish",
//     age:45,
//     getName:function()
//     {
//         return "jagdish"
//     }
// }
// console.log(users.getName())


// let users1:userType={
//     name:"jagdish",
//     age:45,
//     getName:function()
//     {
//         return "jagdish"
//     }
// }
// console.log(users.getName())


interface UserType {
    name: string;
    age: number;
    getName: () => string;
}

let users: UserType[] = [
    {
        name: "jagdish",
        age: 45,
        getName: function () {
            return "jagdish";
        },
    },
    {
        name: "jagdish",
        age: 45,
        getName: function () {
            return "jagdish";
        },
    },
];

console.log(users);
