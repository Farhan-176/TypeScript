"use strict";
function studentinfo(info) {
    studentinfo({ name: " ", rollno: 22, email: " ", isFeespaid: true });
}
let myUser = {
    name: "",
    email: "",
    isActive: false,
    readonly_id: "123"
};
let user = "farhan";
user = "ali";
function greetUser(userName) {
    console.log(`Hello ${userName}`);
}
greetUser(user);
function makeGreeting(userName, msg) {
    return `${msg} ${userName}`;
}
makeGreeting(user, 'How are you');
