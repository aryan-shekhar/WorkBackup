var productArray=[
    {proName:"Mobile",price:700},
    {proName:"Mouse",price:100},
    {proName:"Tab",price:1000}
]

let myData=productArray.map(function(value)
{
    return value.proName;
})

let mydata1=productArray.map((value)=>{
    return value.price;
})
console.log(mydata1);

let showData=productArray.filter(value=>value.price>500)
console.log(showData);