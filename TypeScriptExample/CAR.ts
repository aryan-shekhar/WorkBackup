export class CAR
{
    speed:number
    RegularPrice:number
    color:string
    
    constructor(speed:number,RegularPrice:number,color:string)
    {
        this.speed=speed;
        this.RegularPrice=RegularPrice;
        this.color=color;
    }
    
    getSalePrice(price:number):number
    {
        return this.RegularPrice;
    }

}