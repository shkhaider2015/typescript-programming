
interface IData {
    id: number;
    name: string;
    age: number;
    address: IAddress
}

interface IAddress {
    city: string;
    country: string;
}

const data:IData[] = [
    {
        id: 1,
        name: 'Shakeel Haider',
        age: 30,
        address: {
            city: 'Karachi',
            country: 'Pakistan'
        }
    },
    {
        id: 1,
        name: 'Shakeel Haider',
        age: 30,
        address: {
            city: 'Karachi',
            country: 'Pakistan'
        }
    },
    {
        id: 2,
        name: 'Leory Sane',
        age: 26,
        address: {
            city: 'Munich',
            country: 'Germany'
        }
    },
    {
        id: 3,
        name: 'Emre Can',
        age: 28,
        address: {
            city: 'Dortmund',
            country: 'Germany'
        }
    },
    {
        id: 3,
        name: 'Emre Can',
        age: 28,
        address: {
            city: 'Dortmund',
            country: 'Germany'
        }
    },
    {
        id: 4,
        name: 'Leonel Messi',
        age: 36,
        address: {
            city: 'Miami',
            country: 'USA'
        }
    }
]

let index:number = 0;
let newArray:IData[] = [];
const dataLength:number = data.length;

for(let i=0; i<dataLength -1; i++)
{
    for(let j=i+1; j<dataLength; j++)
    {
        if(data[i].id === data[j].id)
        {
            newArray[index] = data[i];
            index++;
        }
    }
}

console.log("=============== Original Data ===================");
console.table(data)
// console.log("============= Duplicates ===================");
// console.table(newArray)

console.log("============= Finding Duplicate Using ES6 ===================");

const numData:number[] = [1, 3, 11, 5, 7, 5, 11, ]

let newArray1_keys:number[] = data.map(item => item.id)
let newArray1:IData[] = newArray1_keys.filter(item => newArray1_keys.indexOf(item) !== newArray1_keys.lastIndexOf(item) ).map(item => data[item])

let usingSet = new Set(data.map(item => item.id))
let usingSet_array:(IData | undefined)[] = [...usingSet, 17].map(item => data.find(itemX => itemX.id === item )  ).filter(item => item)

console.log("Keys ", usingSet);
console.table(usingSet_array)

// console.log("Index of , ", data.indexOf(data[3]));
// console.log("Last Index of , ", data.lastIndexOf(data[4]));
// console.log("Equal , ", data[0] == data[1]);



/* 

The export {} statement indicates that the file is an ES module. 
In TypeScript, any file containing a top-level import or export 
is considered to be a module. Without top-level import or export 
declarations, the file gets treated as a script whose contents 
are available in the global scope (and to other modules). 

This is what causes the name clash between our name variable 
and the name variable declared in TypeScript global typings.

*/
export {}