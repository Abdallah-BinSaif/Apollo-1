function terminal (value: any){
    console.log(value);
}


// Problem - 1

function filterEvenNumbers(array:number[]):number[]{
    return [] = array.filter((a)=> a % 2 === 0)
}

const result = filterEvenNumbers([1, 2, 3, 4, 5, 6])


// Problem - 2

function reverseString(str: string): string{
    const result = str.split("").reverse().join("")
    return result
}


// Problem - 3

type StringOrNumber = string | number

function checkType(param:StringOrNumber) : string{
    if(typeof param === "string"){
        return "String"
    }else if(typeof param === "number"){
        return "Number"
    }else{
        return ""
    }
}


// Problem - 4
type User = {id: number, name: string, age: number}

function getProperty<X extends User>(obj: X, key:keyof User){
    return obj[key]
}

const user = { id: 1, name: "John Doe", age: 21 };



