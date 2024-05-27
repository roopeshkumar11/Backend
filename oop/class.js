class Person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    talk(){
        console.log("protype make",this.name)
    }

}

const obj=new Person("name",89)

console.log(obj)