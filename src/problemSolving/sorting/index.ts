
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
        id: 4,
        name: 'Leonel Messi',
        age: 36,
        address: {
            city: 'Miami',
            country: 'USA'
        }
    }
]

// S O R T   B Y   C I T Y
const sortByCity = [...data].sort((a, b) =>  { 
    if(a.address.city.toLowerCase() < b.address.city.toLowerCase()) return -1
    else return 0
} )
console.table(data)
console.table(sortByCity)

export {}