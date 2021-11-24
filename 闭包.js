function myFunction(){
    var a = 4;
    return a*a
}
var add = (function(){
    var counter = 0;
    return function(){return counter +=1}
})();
add();
console.log(add())   

function Person(a){
    Person.prototype.name='ww'
    Person.prototype.age='w1w'
    Person.prototype.sex='w2w'
    this.sex='wwwww'
    this.A = a
}
//prototype是一个指针指向构造函数的原型对象，使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。
//换句话说，不必在构造函数中定义对象的实力信息，而是可以将这些信息直接添加到原型对象上
var person1 = new Person(1);
console.log(person1);
console.log(person1.sex);
console.log(Person.prototype.constructor==Person,Person.prototype)
var person2 = new Person();
console.log(Object.getPrototypeOf(person1))
console.log(person1.constructor.prototype.constructor.prototype)
//动态原型模式
// function Person(name,age,job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     if(typeof this.sayName != 'function'){
//         Person.prototype.sayName = function(){
//             console.log(this.name)
//         }
//     }
// }
// var friend = new Person('jj',1,'22');
// friend.sayName()