export class Bank
{
     accId:number
     accName:string
     accBalan:number

    // constructor(){}
    constructor(id:number,name:string,bal:number)
    {
        this.accId=id;
        this.accName=name;
        this.accBalan=bal;
    }

    deposite(amount:number):number
    {
        return this.accBalan+=amount;
    }

    display():void
    {
        console.log(this.accId);
        console.log(this.accName);
        console.log(this.accBalan);
    }
}