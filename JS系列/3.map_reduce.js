// 实现map 方法

Array.prototype.myMap = function (fn, context) {
    // 先拿到数据源
    var originArr = Array.prototype.slice.call(this);
    // 定义结果数组为空数组
    var mapArr = [];
    // 原数组的每一项执行函数并将结果放入到目的数组
    for (var i=0; i<originArr.length; i++) {
        mapArr.push(fn.call(context, originArr[i], i, this))
    }
    return mapArr
};

let arr = [1,2,3,4,5];
arr.myMap((value, index) => value * 2);   // (5) [2, 4, 6, 8, 10]


// reduce 方法
Array.prototype.myReduce = function (fn, initialValue) {
    // 数据源
    var originArr = Array.prototype.slice.call(this);
    // 声明结果，初始索引
    var result, initialIndex;
    // 如果传入了初始值，则初始索引为 0， 否则为1
    initialIndex = initialValue ? 0: 1;
    // 如果传入了初始值，结果的默认初始值为传入的初始值，否则为数据源的第一项
    result = initialValue ? initialValue: originArr[0];
    // 一次去除原数组的每一项计算结果
    for(var i=0; i< originArr.length; i++) {
        result = fn.call(null, result, originArr[i], i, this)
    }
    return result
};
arr.reduce((res, value) => res * value, 1);   // 120
arr.myReduce((res, value) => res * value, 1);   // 120