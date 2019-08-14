function create() {
    // 创建一个空对象
    let obj = new Object();
    // 获得构造函数
    let Constructor = [].shift.call(arguments);
    // 将新创建的对象的原型指向 该构造函数
    obj.__proto__ = Constructor.prototype;
    // 绑定 this ，执行构造函数
    let result = Constructor.apply(obj, arguments);
    // 返回对象
    return typeof result === 'object' ? result: obj
}

function CreateElem(elem, attr, value) {
    this.elem = elem;
    this.attr = attr;
    this.value = value
}

CreateElem.prototype.cons = function () {
    console.log(`这是一个${this.elem}标签，具有${this.attr}属性，内容为${this.value}`)
};

let elem1 = new CreateElem('div', 'className', 'div标签');
let elem2 = create(CreateElem, 'p', 'id', 'p标签');

console.log(elem1);
console.log(elem2);


