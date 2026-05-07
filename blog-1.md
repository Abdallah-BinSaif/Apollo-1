<h1><b>Title:</b></h1>

### ***any*** and ***unknown***. Explaining the concept of type narrowing.

<h1><b>Introduction:</b></h1>


### We can store anything in any type and unknown type.With a little difference. 
> ***any*** don't give error in development environment

> ***unkown*** gives error in development environment

```
// any type
let anythingInAny: any = "Hello, TypeScript!";
anythingInAny = 24;
anythingInAny = [24, "hello"]

// unknown type
let anythingInUnknown: unknown = "Hello, TypeScript!";
anythingInUnknown = 24;
anythingInUnknown = [24, "hello"]
```
### **any** type in the typescript means we don’t want to check type. It doesn’t force us to check type while calling, constructing or accessing property.
```
let anythingInAny: any = "Hello, TypeScript!";

anythingInAny.toFixed(2)
anythingInAny.toUpperCase()
anythingInAny.someNonExistentMethod()
anythingInAny()
```
> ### The example doesn't give errors. But in the runtime it could crash the entire software. This is why any is labeled a “type safety hole”.

<hr>

### **unknown** type means we want to check type. It does force us to check type while calling, constructing or accessing property.

```
let anythingInUnknown: unknown = "Hello, TypeScript!";

anythingInUnknown.toFixed(2) // Error: Object is of type 'unknown'.
anythingInUnknown.toUpperCase() // Error: Object is of type 'unknown'.
anythingInUnknown.someNonExistentMethod() // Error: Object is of type 'unknown'.
anythingInUnknown() // Error: Object is of type 'unknown'.
```
>### The example gives errors because we don’t know the type. Typescript forces us to narrow the type. Here we can introduce the term narrowing.

## Narrowing:

### narrowing means  broader types are narrowed down to more specific types.

### For example, *unknown* type can hold every possible type like *“string”, “number”, “object”, “array”, “undefined”* etc.

### We can narrow down the *unknown* to a more specific type.

```
if (typeof anythingInUnknown === "number") {
  // Here, TypeScript knows that 'anythingInUnknown' is a number
  console.log(anythingInUnknown.toFixed(2)); // No error
}
else if (typeof anythingInUnknown === "string") {
  // Here, TypeScript knows that 'anythingInUnknown' is a string
  console.log(anythingInUnknown.toUpperCase()); // No error
}
else {
  console.log("anythingInUnknown is of an unknown type");
}
```

>### First we narrow down the type to number. If the data is number the code will run.If the data is not a number but string then the second code block will run. If the data is not a number not a string then the third code block will run.


<h1><b>Conclusion:</b></h1>


### **any** is a type safety hole. But **unknown** forces us to narrow down the type.



