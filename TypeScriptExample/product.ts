class product{

    proId:number
    proName:string
    proPrice:number

    constructor( proId:number,proName:string,proPrice:number)
    {
        this.proId=proId;
        this.proName=proName;
        this.proPrice=proPrice;
    }

    GST():number
    {
        return this.proPrice*1.18;
    }    
}

var v1=new product(1,"bottle",900);

console.log(v1.GST());
