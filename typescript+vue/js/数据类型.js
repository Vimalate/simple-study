"use strict";
/*
 * @Author: Vimalakirti
 * @Date: 2020-06-12 16:22:04
 * @LastEditTime: 2020-06-12 17:03:05
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
