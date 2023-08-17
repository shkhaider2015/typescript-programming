class Person {
    public name: string; // can be accessible everywhere and changed
    private age: number; // can be accessible within class only and changed
    protected email: string; // can be accessible within class and subclass and changed
    readonly address: string; // can be accessible within class and subclass and cannot changed

    constructor(name:string, age:number, email:string, address:string)
    {
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
    }

    getEmail()
    {
        return this.email;
    }
    setEmail(email:string)
    {
        this.email = email;
    }

    getAge() {
        return this.age;
    }
    setAge(age:number)
    {
        this.age = age;
    }



}


const shakeel = new Person('Shakeel', 30, 'shkhaider2015@gmail.com', 'SITE Kracahi');

shakeel.name = 'Haider';
shakeel.setEmail('haider@yopmail.com');
shakeel.setAge(50);


console.log("Name : ", shakeel.name);
console.log("Email : ", shakeel.getEmail());
console.log("Age : ", shakeel.getAge())
console.log("Address : ", shakeel.address);

