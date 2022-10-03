let a:unknown;

if(typeof a === 'number') {
    let b = a+1
}

if(typeof a === "string"){
    let b = a.toUpperCase();
}

function hello() {
    console.log('x')
}
//void

function hello2(name:string|number){
    if(typeof name ==="string"){
        name
    } else if(typeof name ==="number"){
        name
    } else{
        name //never// this code should never run
    }
}