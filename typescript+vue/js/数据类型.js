"use strict";
/*
 * @Author: Vimalakirti
 * @Date: 2020-06-12 16:22:04
 * @LastEditTime: 2020-06-12 17:49:59
 * @Description:
 * @FilePath: \简单实现\typescript+vue\数据类型.ts
 */
//数组
//方式一：let 数组名：类型[]=[值1，值2]
var arr = ['1', '2'];
//方式二：let 数组名：Array<类型>=[值1，值2]
var arr2 = ['1', '2'];
//元组
//概念：就是一个规定了元素个数和每个元素类型的‘数组’，每个元素的类型可以不同
//语法 let 元组名：[类型1，类型2，类型3]=[值1，值2，值3]
var tup1 = ['name', 2, true];
//枚举：用一组标识来代表数值
//1.创建性别枚举
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 1] = "Boy";
    Gender[Gender["Girl"] = 2] = "Girl";
    Gender[Gender["Unknown"] = 3] = "Unknown";
})(Gender || (Gender = {}));
console.log(Gender.Boy);
console.log(Gender.Girl);
console.log(Gender.Unknown);
var Gender2;
(function (Gender2) {
    Gender2[Gender2["Boy"] = 0] = "Boy";
    Gender2[Gender2["Girl"] = 1] = "Girl";
    Gender2[Gender2["Unknown"] = 2] = "Unknown";
})(Gender2 || (Gender2 = {}));
console.log(Gender2.Boy); //0
console.log(Gender2.Girl); //1
console.log(Gender2.Unknown); //2
//2.使用枚举
var userSex = Gender.Boy;
console.log(userSex);
//h函数 返回值 类型
function sayHi() {
    return 'hello world';
}
var res1 = sayHi();
console.log(res1);
//函数 形参 类型
//无返回值 void
function jump(city) {
    console.log("\u8DF3" + city);
}
jump('p城');
//函数可选参数 ？
function buyGUn(gunName, count) {
    console.log(gunName + "\u662F\u597D\u8D27\uFF0C\u9001\u4F60" + count + "\u628A");
}
buyGUn('m416', 3);
//函数默认值
function buyGUn2(gunName, count) {
    if (gunName === void 0) { gunName = 'm416'; }
    if (count === void 0) { count = 2; }
    console.log(gunName + "\u662F\u597D\u8D27\uFF0C\u9001\u4F60" + count + "\u628A");
}
//都是默认值
buyGUn2(); //'m416',2
//都是实参
buyGUn2('M42', 10);
//只传前面
buyGUn2('ak47');
//只传后面
buyGUn2(undefined, 3);
//函数 剩余参数
function add(x, y) {
    var restOfNum = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restOfNum[_i - 2] = arguments[_i];
    }
    //创建求和变量
    var sum = x + y;
    //累加
    for (var _a = 0, restOfNum_1 = restOfNum; _a < restOfNum_1.length; _a++) {
        var v = restOfNum_1[_a];
        sum += v;
    }
    //打印结果
    console.log('结果' + sum);
}
add(1, 2);
add(1, 2, 3, 4, 5, 6);
//类 calss
var City = /** @class */ (function () {
    function City(name, level) {
        this.cName = name;
        this.cLevel = level;
    }
    City.prototype.about = function () {
        console.log("\u6B22\u8FCE\u6765\u5230" + this.cName + ",\u6B64\u5730\u5371\u9669\u7CFB\u6570\u4E3A" + this.cLevel);
    };
    return City;
}());
