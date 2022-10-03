
type Age = number;
type Name = string;
type Player = {
    name:Name,
    age?:Age
}

function playerMaker(name:string) : Player{
    return{
        name
    }
}

const playerMaker2 = (name:string) : Player => ({name})

const nico = playerMaker("nico")
nico.age = 12
nico.name = "las"

const numbers: number[] = [1,2,3,4]
numbers.push(1)

const player: [string, number, boolean] = ["nico",1,true]

