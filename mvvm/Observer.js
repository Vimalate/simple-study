/*
 * @Author: your name
 * @Date: 2020-05-28 20:18:16
 * @LastEditTime: 2020-05-28 20:32:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \简单实现\mvvm\Obsver.js
 */ 
class Observer{
  constructor(data){
    this.observer(data)
  }
  observer(data){
    if(data && typeof data==='object'){
      console.log(Object.keys(data))
      Object.keys(data).forEach(key=>{
        this.defineReactive(data,key,data[key])
      })
    }
  }
  defineReactive(data,key,value){
    // 递归
    this.observer(value)
    Object.defineProperty(data,key,{
      // 是否可遍历
      enumerable:true,
      // 是否可更改
      configurable:false,
      get:()=>{
        return value
      },
      set:(newValue)=>{
        // 更改新值时进行监听
        this.observer(newValue)
        if(newValue!==value){
          value=newValue
        }
      }
    })
  }
}