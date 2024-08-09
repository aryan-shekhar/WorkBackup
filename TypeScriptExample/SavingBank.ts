import { Bank } from "./Bank";
class SavingBank extends Bank
{
    constructor(id:number,name:string,bal:number,dex:string){
        super(id,name,bal);
    }

deposite(amount:number): number{
    return this.accBalan +=amount;
}

}

var s1=new SavingBank(123,"Aryan",400,"sda");
s1.display();
s1.deposite(800);
s1.display();



