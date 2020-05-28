/*
 * @Author: your name
 * @Date: 2020-05-28 20:18:16
 * @LastEditTime: 2020-05-28 21:42:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \简单实现\mvvm\Obsver.js
 */
class Watcher {
  constructor(vm, expr, cb) {
    this.vm = vm,
      this.expr = expr,
      this.cb = cb
    this.oldVal = this.getOldVal()
  }
  getOldVal() {
    Dep.target = this
    let oldVal = compileUtil.getVal(this.expr, this.vm)
    Dep.target = null
    return oldVal
  }
  update() {
    let newVal = compileUtil.getVal(this.expr, this.vm)
    if (newVal !== this.oldVal) {
      this.cb(newVal)
    }
  }
}

class Dep {
  constructor() {
    this.subs = []
  }
  // 收集观察者
  addSub(watcher) {
    this.subs.push(watcher)
  }
  // 更新
  notify() {
    this.subs.forEach(w => {
      w.update()
    })
  }
}


class Observer {
  constructor(data) {
    this.observer(data)
  }
  observer(data) {
    if (data && typeof data === 'object') {
      console.log(Object.keys(data))
      Object.keys(data).forEach(key => {
        this.defineReactive(data, key, data[key])
      })
    }
  }
  defineReactive(data, key, value) {
    // 递归
    this.observer(value);
    const dep = new Dep();
    Object.defineProperty(data, key, {
      // 是否可遍历
      enumerable: true,
      // 是否可更改
      configurable: false,
      get: () => {
        // 订阅数据变化时，往 Dep 中添加观察者
        Dep.target && dep.addSub(Dep.target)
        return value
      },
      set: (newValue) => {
        // 更改新值时进行监听
        this.observer(newValue)
        if (newValue !== value) {
          value = newValue
        }
        // 通知变化
        dep.notify()
      }
    })
  }
}