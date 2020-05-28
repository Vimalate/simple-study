/*
 * @Author: your name
 * @Date: 2020-05-28 17:08:36
 * @LastEditTime: 2020-05-28 21:56:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-blog\docs\blog\VUE-Library\MVue.js
 */
const compileUtil = {
  getVal(expr, vm) {
    return expr.split('.').reduce((data, currentVal) => {
      return data[currentVal]
    }, vm.$data)
  },
  getContentVal(expr,vm) {
    return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      return this.getVal(args[1], vm)
    })
  },
  text(node, expr, vm) {
    let value
    if (expr.indexOf('{{') !== -1) {
      value = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
        new Watcher(vm, args[1], (newVal) => {
          this.updater.textUpdater(node, this.getContentVal(expr, vm))
        })
        return this.getVal(args[1], vm)
        console.log(args)
      })
    } else {
      value = this.getVal(expr, vm)
    }

    this.updater.textUpdater(node, value)
  },
  html(node, expr, vm) {
    const value = this.getVal(expr, vm)
    new Watcher(vm, expr, (newVal) => {
      this.updater.htmlUpdater(node, newVal)
    })
    this.updater.htmlUpdater(node, value)
  },
  model(node, expr, vm) {
    const value = this.getVal(expr, vm)
    new Watcher(vm, expr, (newVal) => {
      this.updater.modelUpdater(node, newVal)
    })
    this.updater.modelUpdater(node, value)
  },
  on(node, expr, vm, eventName) {
    let fn = vm.$options.methods && vm.$options.methods[expr];
    node.addEventListener(eventName, fn.bind(vm), false)
  },
  // 更新函数
  updater: {
    textUpdater(node, value) {
      node.textContent = value
    },
    htmlUpdater(node, value) {
      node.innerHTML = value
    },
    modelUpdater(node, value) {
      node.value = value
    }
  }
}

class Compile {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm
    //1 获取文档碎片，放入内存减少重流和重绘
    const fragment = this.node2Fragment(this.el)
    // console.log(fragment)
    // 2 编译模板
    this.compile(fragment)

    //3 最加子元素到根元素
    this.el.appendChild(fragment)

  }
  compile(fragment) {
    // 获取子节点
    const childNodes = fragment.childNodes;
    [...childNodes].forEach(child => {
      // console.log(child)
      if (this.isElementNode(child)) {
        // console.log('元素节点',child)
        this.compileEle(child)
      } else {
        // console.log('文本节点',child)
        this.compileText(child)
      }
      if (child.childNodes && child.childNodes.length) {
        this.compile(child)
      }
    });
  }
  compileEle(node) {
    const attr = node.attributes;
    [...attr].forEach(item => {
      // console.log(item)
      const {
        name,
        value
      } = item
      // console.log(name, value)
      if (this.isDirective(name)) { //是一个指令
        const [, directive] = name.split('-') //text html model on：click
        const [dirName, eventName] = directive.split(':') //text html model on
        // 数据更新，数据驱动视图
        compileUtil[dirName](node, value, this.vm, eventName)
        // 删除元素指令标签上的属性
        node.removeAttribute('v-' + directive)
      } else if (this.isEventName(name)) { //@click=''
        let [, eventName] = name.split('@')
        compileUtil['on'](node, value, this.vm, eventName)
      }
    })
  }
  compileText(node) {
    // {{}}
    const content = node.textContent
    if (/\{\{(.+?)\}\}/.test(content)) {
      compileUtil['text'](node, content, this.vm)
    }
  }
  isEventName(attrNmae) {
    return attrNmae.startsWith('@')
  }
  isDirective(attrNmae) {
    return attrNmae.startsWith('v-')
  }
  node2Fragment(el) {
    // 创建文档碎片
    const f = document.createDocumentFragment();
    let firstChild
    while (firstChild = el.firstChild) {
      f.appendChild(firstChild)
    }
    return f
  }
  isElementNode(node) {
    return node.nodeType === 1
  }
}

class MVue {
  constructor(options) {
    this.$el = options.el
    this.$data = options.data
    this.$options = options
    if (this.$el) {
      // 1 实现一个数据观察者
      new Observer(this.$data)
      // 2 实现一个指令解析器
      new Compile(this.$el, this)
    }

  }
}