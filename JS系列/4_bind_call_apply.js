// call 实现原理
// apply 实现原理相同，只需将 ...args 换成 args

Function.prototype.myCall = function (context = window, args) {
    let func = this;   // 注意此处的 this 为调用 myCall 方法的函数
    let fn = Symbol('fn');   // 创建一个 唯一 符号值
    context[fn] = func;   // 给要调用函数的对象添加一个 唯一的 symbol 属性， 值为调用 myCall的方法
    let res = context[fn](...args);   // 重点代码，利用this指向执行原函数，相当于context.caller(...args)
    delete context[fn];  // 删除 symbol 属性
    return res
};


// bind 实现原理
// 要点：
// 1.普通函数改变this指向；
// 2.对于构造函数，要保证原函数的原型对象上的属性不能丢失

Function.prototype.myBind = function (context = window, ...args) {
    let func = this;   // // 注意此处的 this 为调用 myBind 方法的函数
    let fBound = function () {
        // this instanceof fBound 表示构造函数的形式，如： new fun.myBind(obj)
        return func.apply(this instanceof fBound ? this : context, args)
    };
    fBound.prototype = Object.create(this.prototype);  // 此处是保证原函数的原型对象上的属性不丢失
    return fBound
};