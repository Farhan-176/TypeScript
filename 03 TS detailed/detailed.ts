let user: string | number = "ali";
user = 4;

let fruit = ['apple' , 'banana' , 'mango'];

let fruits : string[]=  ['apple' , 'banana' , 'mango']


let fruit1: any = "Number" 
fruit1 = true;


let mixArr : (string | number)[] = [1,2,'farhan']




type Car = string | number;


let car: Car = '223232';
car = 'farhan';


type Cardetaile = {
    name: string,
    modelnumber: string | number,
    price: number,
    IsAutomatic: boolean,
    features: string[],
    Launchingyear?: number| string,
    calculateAvg?: (fuel:number , distance:number) => void
}


let mycar: Cardetaile ={
    name : "Mehran",
    modelnumber : 2025,
    price : 199,
    IsAutomatic: false,
    features: ["fast than formula 1", "more seats that coaster", "special is that made in pakistan"],
    Launchingyear: "after launching it relaunch in chor market",
}
mycar.calculateAvg= (fuel,distance)=>{console.log(distance/fuel);}
mycar.calculateAvg(20,500);
mycar.Launchingyear = 2020;

console.log(mycar);




interface Animal {
    limbs: number,
    color: string[]
}

interface Dog extends Animal {
    isBark: boolean
}

interface Cat extends Animal {
    isMewe: boolean
}

let cat: Cat = {
    limbs: 4,
    color: ['black', 'white', 'brown', 'grey', 'black n white'],
    isMewe: true
}

let dog: Dog = {
    limbs: 4,
    color: ['yellow', 'black', 'white', 'brown'],
    isBark: true
}

console.log(cat);
console.log(dog);












