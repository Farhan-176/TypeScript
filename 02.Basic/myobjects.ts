

type User = {
    name: string;
    rollno: number;
    email: string;
    isFeespaid: boolean;
}

function studentinfo (info: User ){
    studentinfo({name: " " , rollno: 22 , email: " ", isFeespaid: true})
}



type UserDetailed = {
    name: string;
    email: string;
    isActive: boolean;
    readonly_id: any;
    creditcardDetial?: string | number ;
}

let myUser : UserDetailed = {
    name: "",
    email: "",
    isActive: false,
    readonly_id: "123"
}




let user:string = "farhan";
user = "ali";

function greetUser(userName: string): void {
    console.log(`Hello ${userName}`);
}

greetUser(user);

function makeGreeting(userName: string, msg: string): string{
    return `${msg} ${userName}`;
}
makeGreeting(user, 'How are you');