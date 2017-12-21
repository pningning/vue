// 这是项目的入口文件

// 导入Jquery
import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import './css/index.scss'
// 实现奇偶行变色
$(function () {
  $('li:odd').css('backgroundColor', 'lightblue')
  $('li:even').css('backgroundColor', 'yellow')
})

class Person {
  static info = { name: 'zs'}
}

// console.log(Person.info.name)
// import a, {c } from './js/01.Es6的导入和导出.js'
// import {d as dd,e} from './js/01.Es6的导入和导出.js'
// console.log(a)
// console.log(c)
// console.log(dd)
// console.log(e)
// import './js/02.class实现面向对象编程.js'
import './js/03.使用class实现面向对象编程（继承）.js'