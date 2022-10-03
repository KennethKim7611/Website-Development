type SuperPrint = {
    <TypePlaceholder>(arr:TypePlaceholder[]):void
    //(arr:(number|boolean)[]):void will have to write every combination

}

const superPrint: SuperPrint = (arr) => arr[0]

const a2 = superPrint([1,2,3,4])
const b = superPrint([true,false,true])
const c = superPrint(["a","b","c"])
const d = superPrint([1,2,true,false])


