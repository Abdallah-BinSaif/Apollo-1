// Problem - 1
function filterEvenNumbers(array: number[]): number[] {
    return [] = array.filter((a) => a % 2 === 0)
}
const result = filterEvenNumbers([1, 2, 3, 4, 5, 6])


// Problem - 2
function reverseString(str: string): string {
    const result = str.split("").reverse().join("")
    return result
}


// Problem - 3

type StringOrNumber = string | number

function checkType(param: StringOrNumber): string {
    if (typeof param === "string") {
        return "String"
    } else if (typeof param === "number") {
        return "Number"
    } else {
        return ""
    }
}


// Problem - 4
type User = { id: number, name: string, age: number }

function getProperty<X extends User>(obj: X, key: keyof User) {
    return obj[key]
}

const user = { id: 1, name: "John Doe", age: 21 };


// Problem - 5
interface Book {
    title: string,
    author: string,
    publishedYear: number
}

function toggleReadStatus(book: Book) {
    return { ...book, isRead: true }
}
const myBook = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024
};


// Problem - 6

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}
const student = new Student("Alice", 20, "A");


// Problem - 7

type NumberArray = number[]

function getIntersection(arr1: NumberArray, arr2: NumberArray): NumberArray {
    const newArray: NumberArray = []
    arr1.map(element => {
        arr2.map((element2) => {
            if (element === element2) {
                newArray.push(element)
            }
        })
    })
    return newArray
}
