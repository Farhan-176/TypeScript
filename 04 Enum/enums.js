"use strict";
let basicColors;
basicColors = ["red", "blue", "yellow"];
let basicColors2 = ["blue"];
const graph = ["hello", 1];
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["CONFIRMED"] = 1] = "CONFIRMED";
    OrderStatus[OrderStatus["SHIPPED"] = 2] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 3] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
console.log(OrderStatus.CONFIRMED);
var Httprequest;
(function (Httprequest) {
    Httprequest[Httprequest["success"] = 200] = "success";
    Httprequest[Httprequest["badrequest"] = 4040] = "badrequest";
    Httprequest[Httprequest["failure"] = 500] = "failure";
})(Httprequest || (Httprequest = {}));
console.log(Httprequest.badrequest);
console.log(Httprequest[200]);
var Mathquest;
(function (Mathquest) {
    Mathquest[Mathquest["pi"] = 2.714] = "pi";
    Mathquest[Mathquest["randomnumber"] = Math.random()] = "randomnumber";
})(Mathquest || (Mathquest = {}));
console.log(Mathquest.pi * Mathquest.randomnumber);
var Province;
(function (Province) {
    Province["Sindh"] = "Sindh";
    Province["punjab"] = "punjab";
    Province["balochistan"] = "balochistan";
    Province["KP"] = "KP";
})(Province || (Province = {}));
// console.log(Province.balochistan);
for (let key in Province) {
    console.log(Province[key]);
}
let abc = prompt('what is your name');
let username = abc;
let user2 = abc;
console.log(abc);
function add(a, b) {
    return a + b;
}
add(2, 3);
