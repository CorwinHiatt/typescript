console.log('hello typescript')

//js let num = 23 
//differences 
let firstName: string = "Corwin"
let age: number = 26
let good: boolean = true

let num: number = 23 // typescript //label your values 

let fruit: string = 'bananas';

let array: string[] = [
    'apples',
    ' grapes',
    ' mandarins',
]

enum taxForm {        //type annotation
   standard = "1040",
   childCredit = "1065",
   sCorp= "1121m",
    Sales = "1099"
}

console.log(`
you need form ${taxForm.childCredit}
as well as ${taxForm.Sales}
`)

console.log(`
   First Name: ${firstName} 
   Your age: ${age}
   you have many ${array}
`)

let code: string | number = 11 + ' hello will this be valid code'
console.log(
code 
)


// let array: string[] = [
//     'apples',
//     ' grapes',
//     ' mandarins',


function getFruit(index: number): string {
    return array[index]
}
function debug(message: string):void {
    console.log(message)
}

debug('OMG no return')


let chosenFruit: string = getFruit(1)

console.log(`you choose an ${getFruit(0)}`)

// any = any type of value in typescript 