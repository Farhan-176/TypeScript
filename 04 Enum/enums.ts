let basicColors: [string,string,string];

basicColors = ["red","blue", "yellow"];


let basicColors2 : [string] = ["blue"];


const graph: [x:string , y:number] = ["hello" , 1];




enum OrderStatus {
    PENDING,
    CONFIRMED,
    SHIPPED,
    DELIVERED
}
console.log(OrderStatus.CONFIRMED);



enum Httprequest {
        success = 200,
        badrequest = 4040,
        failure = 500
}
console.log(Httprequest.badrequest);
console.log(Httprequest[200]);


 


enum Mathquest {
    pi = 2.714,
    randomnumber = Math.random()
}

console.log(Mathquest.pi*Mathquest.randomnumber);



enum Province {
    Sindh = "Sindh",
    punjab = "punjab",
    balochistan = "balochistan",
    KP = "KP"
}

// console.log(Province.balochistan);


for(let key in Province){
    console.log(Province[key]);
}



let abc = prompt('what is your name');
let username : string = abc as string;
let user2: string = <string>abc;

console.log(abc);


function add(a: number, b: number): number {
         return a + b;
 };

