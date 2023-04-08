function instance(obj, fun) {
    // 如果obj 为 true，循环执行，直到 return true,或者obj 为null
    while(obj) {
        // 判断目的构造函数的原型是否在对象的原型链上
        if(obj.__proto__ === fun.prototype) {
            // 如果在原型链上，则返回true
            return true
        } else {
            // 如果没在，则让 obj 等于obj的隐士原型也即obj的构造函数的显示原型，此处的目的就是通过原型链一级一级向上查找
            obj = obj.__proto__;
        }
    }
    // 当obj为null 的时候，也即obj的原型链上查找不到目的构造函数时，返回false
    return false
}

function Elem() {}
function Fun() {}

let elem = new Elem();
let fun = new Fun();

console.log(elem instanceof Elem);  // true
instance(elem, Elem);  // true

console.log(fun instanceof Elem);  //false
instance(fun, Elem);  // false