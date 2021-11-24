/*浅拷贝与深拷贝
基本数据类型：string number null undefined symbol boolean bigint
引用数据类型：Object array data math math regExp
内存中的stack栈区和堆区heap
栈区：自动分配内存空间，自动释放，占用固定大小空间，存放基本类型
堆区：会动态分配内存空间，大小不固定且不会自动释放，存放引用类型
em..有个问题，学过java的人都知道..String是对象，但是js中是基本数据类型
这应该是因为String的存储比较特殊，不能更改字符串
*/
// console.log(String.raw`wef/fewf*`)
//console.log(typeof JSON) //object
/////基本数据类型直接赋值就ok
/////引用数据类型 
//浅拷贝
//当定义的对象中只有基本类型时，该方法就是深拷贝

/*let a = {
    name: 'za',
    age:19
};
let b = Object.assign({c:'s'},a);
console.log(b) //{ c: 's', name: 'za', age: 19 }*/
//当定义的对象中有引用类型的时候，该方法就是浅拷贝。
/* */
let a = {
    name:'s',
    eat:{
        what:'pg',
        price:19
    },
    arr:[]
}
let b = Object.assign({},a)
// b.eat = {}
b.eat.what = 's'
b.eat.price=45
b.name ='555'
console.log(a,b)
/*数组中的方法 */
// Array.prototype.slice()和Array.prototype.concat只能深拷贝第一层
/*********深拷贝************** */
deepCopy = (source) =>{
    const targetObj = source.constructor === Array?[]:{};//先判断是数组还是对象
    for(let keys in source){//遍历
        if(source.hasOwnProperty(keys)){
            if(source[keys]&&typeof source[])
        }

    }
}