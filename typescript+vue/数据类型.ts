/*
 * @Author: Vimalakirti
 * @Date: 2020-06-12 16:22:04
 * @LastEditTime: 2020-06-12 16:43:33
 * @Description: 
 * @FilePath: \简单实现\typescript+vue\数据类型.ts
 */ 


//数组
//方式一：let 数组名：类型[]=[值1，值2]
let arr:string[]=['1','2']

//方式二：let 数组名：Array<类型>=[值1，值2]
let arr2:Array<string>=['1','2']


//元组
//概念：就是一个规定了元素个数和每个元素类型的‘数组’，每个元素的类型可以不同
//语法 let 元组名：[类型1，类型2，类型3]=[值1，值2，值3]
let tup1:[string,number,boolean]=['name',2,true]

//枚举：用一组标识来代表数值
//1.创建性别枚举
enum Gender{
  Boy=1,
  Girl=2,
  Unknown=3
}
console.log(Gender.Boy)
console.log(Gender.Girl)
console.log(Gender.Unknown)

enum Gender2{
  Boy,
  Girl,
  Unknown
}
console.log(Gender2.Boy)//0
console.log(Gender2.Girl)//1
console.log(Gender2.Unknown)//2
//2.使用枚举
