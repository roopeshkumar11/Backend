class Person {
    constructor(name,age){
        this.name=name,
        this.age=age
        
    }
    talk(){
        console.log(`hello my ${this.name}`)
    }
}



class Student extends Person{
    constructor(name,age,mark){
        super(name,age)
        this.mark=mark
    }
}



class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age)
        this.subject=subject
    }
}



const st1=new Person("roopesh",12,90)
console.log(st1)

console.log(st1.talk())

const teach=new Person("rakesh",56,"science")
console.log(teach)

console.log(
    teach.talk())