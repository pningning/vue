

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.info = '这是静态属性'
Person.fun = function() {
    return '这是静态方法'
}
// console.log(Person.info) //--> 这是静态属性
// console.log(Person.fun())//--> 这是静态方法
// var p1 = new Person('zs', 20)
// console.log(p1.info)//--> undefined
// // console.log(p1.fun())//--> 报错了
// console.log(p1.name)//--> zs



//Es6中
class Per {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    static info = '这是静态的属性'
    static show() {
        console.log('这是静态的方法')
    }
    showName() {
       console.log('这是实例的方法')
    }
}

var p2 = new Per('ls', 20)
// console.log(p2.name)//--> ls
// console.log(p2.info)//--> undefined
// p2.showName()//-->这是实例的方法
// p2.show()//-->报错
console.log(Per.info)//--> 这是静态的属性
Per.show()//--> 这是静态的方法