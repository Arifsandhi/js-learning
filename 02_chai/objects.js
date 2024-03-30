//in this we will learn about objects in js

const obj={
    name: "Arif",
    age:21

}

console.log(obj.name)

//here we have created a simple objects.

//{IMP}If we want to create symbol the syntax is different .. to print any simple data we use (.) dot but we cannot use (.) to print symbol. if we do then the type will change to string.

const mysym= Symbol("key1")

const js={
    name:"Arif",
    age:21,
    [mysym]:"Arifiskey"
}

console.log(js[mysym])
console.log(typeof js[mysym])
 
//now we will create objects under objects

const nested={
    fullusername:{
        username:{
            firstname:"Arif",
            lastname:"sandhi"

        }
    }
}

console.log(nested)
console.log(nested.fullusername)
console.log(nested.fullusername.username)
console.log("firstname:",nested.fullusername.username.firstname)


console.log("=======================================================")
//to combine or add 2 object we can use spread technique .(...)//
const source = {1:"a",2:"b",3:"c"}
const target = {1:"a",2:"b",3:"c"}

const obj3 ={...source,...target}
console.log(obj3)
console.log("=======================================================")

//if we are working on a project and some data come in form of ojects so we can convert that data into array 

// we can also print the keys and values
// The return type of that data will be array.

const user=[
    {
        id:1,
        name:"a"
    },{
        id:1,
        name:"a"
    },{
        id:1,
        name:"a"
    },{
        id:1,
        name:"a"
    }
]

console.log(user[1].id)

//to find all keys of the objects we use objects.keys

console.log(Object.keys(obj))

//to find that any objects has a property or not 

console.log(obj.hasOwnProperty("name"));//"O & P will be capital"

//destructuring of  objects
//by using destructur {it become easy to access any element of object } 
const destruct={
    company:"tcs",
    owner:"Sir Tata"
}
//without destructur
console.log(destruct.company)
//after destructur 
//it reduce effort to get element of object
const {company}=destruct
console.log(company)
const {owner}=destruct
console.log(owner)

//so we ends her for objects
console.log("objects over")



