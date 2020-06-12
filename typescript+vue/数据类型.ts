/*
 * @Author: Vimalakirti
 * @Date: 2020-06-12 16:22:04
 * @LastEditTime: 2020-06-12 17:49:59
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
let userSex:Gender=Gender.Boy
console.log(userSex)


//h函数 返回值 类型
function sayHi():string{
  return 'hello world'
}
let res1:string=sayHi()
console.log(res1)

//函数 形参 类型
//无返回值 void
function jump(city:string):void{
  console.log(`跳${city}`)
}
jump('p城')

//函数可选参数 ？
function buyGUn(gunName:string,count?:number):void{
  console.log(`${gunName}是好货，送你${count}把`)
}
buyGUn('m416',3)

//函数默认值
function buyGUn2(gunName:string='m416',count:number=2):void{
  console.log(`${gunName}是好货，送你${count}把`)
}
//都是默认值
buyGUn2()//'m416',2
//都是实参
buyGUn2('M42',10)
//只传前面
buyGUn2('ak47')
//只传后面
buyGUn2(undefined,3)

//函数 剩余参数
function add(x:number,y:number,...restOfNum:number[]):void{
  //创建求和变量
  let sum:number=x+y
  //累加
  for(let v of restOfNum){
    sum+=v
  }
  //打印结果
  console.log('结果'+sum)
}
add(1,2)
add(1,2,3,4,5,6)

//类 calss
class City{
  cName:string;
  cLevel:number;
  constructor(name:string,level:number){
    this.cName=name
    this.cLevel=level
  }
  about(){
    console.log(`欢迎来到${this.cName},此地危险系数为${this.cLevel}`)
  }
}