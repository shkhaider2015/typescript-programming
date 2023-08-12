
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

const data1:IData[] = [
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

console.table(data1)