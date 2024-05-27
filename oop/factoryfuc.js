const factoryfunc=(name ,age)=>{
const demo={
    name:name,
    age:age,
   talk(){
    console.log("hello")
   }

   
}
return demo

}

const obj=factoryfunc("roopesh",19)
console.log(obj)