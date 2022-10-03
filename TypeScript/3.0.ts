function add(a:number, b:number):number {
    return a+b
}

const add2 = (a:number, b:number) => a+b

// same

type Add = (a:number, b:number) => number;

type Add2 = { //overloading
    (a:number,b:number) : number
    (a:number,b:string) : number
}

const add3:Add = (a,b) => a+b
const add4: Add2 = (a,b) => {
    if(typeof b === "string") return a
    return a+b
} 

type Config = {
    path: string,
    state: object
}

type Push = {
    (path:string):void
    (config:Config):void
}

const push:Push = (config) => {
    if(typeof config === "string"){
        console.log(config)
    }
    else{
        console.log(config.path)
    }
}