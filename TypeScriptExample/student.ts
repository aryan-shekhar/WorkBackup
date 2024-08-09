class student{
    stdId:number
    stdName:string
    stdClass:string

    constructor(stdId:number,stdName:string,stdClass:string)
    {
        this.stdId=stdId;
        this.stdName=stdName;
        this.stdClass=stdClass;
    }

    display():void
    {
        console.log(this.stdId);
        console.log(this.stdName);
        console.log(this.stdClass);
    }
}

var v1=new student(1,"Aryan","F");
v1.display();
var v2=new student(2,"Ayush","A");
v2.display();