type Add5 = {
    (a:number, b:number) : number
    (a:number, b:number, c:number): number,
}

const add5:Add5 = (a,b,c?:number) => {
    if(c) return a+b+c
    return a+b
}

add5(1,2)
add5(1,2,3)