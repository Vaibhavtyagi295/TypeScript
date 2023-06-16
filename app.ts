
// type User ={



    
//     name:string,
//     age:number,
//     role:string,
//     exp?:boolean,

// }



// const uer:User = {
  

//     name:"vaibhav",
//     age:23,
//     role:"seller",
//     exp:true



// }

// function Reader(num1:number[]):number  {
//    return num1.reduce((item ,mon) => 
//         item + mon
//     )
// }

// console.log(Reader([1,2,3,4,5,54,87]))


// function login(userr:User):User{
//       return userr

// }

// console.log(login(uer))


//interFaces 

// interface Transaction {
//     payerAccountnumber:number;
//     payeeAccountnumber:number;
// }

// interface Bankdetails {
//     accountNumber:number;
//     accountHolder:string;
//     isactive:boolean;
//     balance:number;
//    transaction:Transaction[];

// }

// const transaction1:Transaction={

//     payerAccountnumber:Math.random(),
//     payeeAccountnumber:Math.random(),
// }

// const transaction2:Transaction={

//     payerAccountnumber:Math.random(),
//     payeeAccountnumber:Math.random(),
// }

// const bankdetail:Bankdetails = {
//     accountNumber: Math.random(),
//     accountHolder: "vaibhav",
//     isactive:true,
//     balance:Math.floor(Math.random() * 10),
//     transaction:[
//    transaction1,transaction2
//     ]
// };

// console.log(bankdetail)




// interface Book {
//     namee:string;
//     price:number;
// }
// interface Ebook extends Book {
//   format:string;
//   filesize:string;
// }
// interface audiobook extends Ebook {
//     duration:number
// }


// //merge book with book 
// interface Book {
//     discount:number
// }
// const book :audiobook={
//   namee: "hell boy",
//   price:250,
//   format:"guyeuihdguihgiudhidfhghg",
//   discount:45,
//   filesize:"rhgdfkjhhkjgdhkj",
//   duration:4555555


// }

// console.log(book)




//unions

// type ID = number | string;

// function Print(id: ID) {

// if(typeof id === "string"){

//     console.log(id.toUpperCase());
// }else{
//     console.log(id + 1)
// }

// }

// Print("uiregouth");
// function part(x: string | number[]) {
//     if (typeof x === "string") {
//       return x.slice(0, 3);
//     } else {
//       console.log("uhyhu");
//       return "default value"; // add a return statement with a default value
//     }
//   }
  
//   console.log(part("hgdhgddfhlkjh")); // Output: "hgd"
  

//generics

// function logString(arg:string) {
// console.log(arg)
// return arg

// }

// logString("kjdoije")



// function num(arg:number) {
//     console.log(arg)
//     return arg
    
//     }
    
//     num(2)

//this is generics


// function lonarr<T>(arg:T)
// {
//   console.log(arg)
//   return arg
// }
    
// lonarr([54,54,"jg"]);


//generics

interface Older {
    age:number
}


function getldest<T extends Older>(x:T[]):T{
    return x.sort((a,b)=>a.age - b.age)[0];

}

const person = [{age:30},{age:34},{age:38},{age:30}];
// console.log(getldest([{age:30},{age:34},{age:38},{age:30}]))


interface Player {
    name:string
    age:number
}


const players = [{name:"ram",age:30},
{name:"ramesh",age:34},
{name:"rohit",age:38},
{name:"rahul",age:30}]
 
console.log(getldest(person))