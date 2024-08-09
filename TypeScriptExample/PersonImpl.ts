import { PersonInterface } from "./PersonInterface";

class PersonImpl implements PersonInterface
{
    firstName: string;
    lastName: string;
    getFullName(): string {
        return this.firstName+" "+ this.lastName;
    }
}

var v1=new PersonImpl();
v1.firstName="Aryan";
v1.lastName="Shekhar";
console.log(v1.getFullName());
