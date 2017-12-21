class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        console.log('2')
    }

    sayHello() {
        console.log('我的名字叫' + this.name)
    }
}


//实现继承  使用 extends和super 实现继承 super相当于父类的constructor
class GDRen extends Person { 
    constructor(name, age) {
        //创建实例的时候，会先调用constructor
        console.log('1')
        super(name, age)
        console.log(3)
    }
}
var p1 = new GDRen('zs', 20)
p1.sayHello()