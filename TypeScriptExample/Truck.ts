import { CAR } from "./CAR";

class Truck extends CAR
{
    weight:number

    constructor(speed:number,RegularPrice:number,color:string,weight:number)
    {
        super(speed,RegularPrice,color);
        this.weight=weight;
    }

    getSalePrice(): number {
        if(this.weight>2000) return this.RegularPrice*0.90
        else return this.RegularPrice*0.80
    }
} 

var t1=new Truck(100,5000,"blue",22000);
console.log(t1.getSalePrice());
var t2=new Truck(200,50000,"green",1000);
console.log(t2.getSalePrice());

