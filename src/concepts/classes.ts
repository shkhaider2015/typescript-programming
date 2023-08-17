class Car {
   model:string;
   year:number;
   price:number;

   constructor(model:string, year:number, price:number){
    this.model = model;
    this.year = year;
    this.price = price;
   }

   drive() {
    console.log("The Car has Started driving");
   }

   stop(){
    console.log("The Car has stopped");
   }

   details ()
   {
    console.log(`Model : ${this.model} \nYear : ${this.year}\n Price : ${this.price} `)
   }

}

const tesla = new Car('X231', 2023, 10000);
const civic = new Car('TT54R', 2019, 5000);

tesla.details();
civic.details();