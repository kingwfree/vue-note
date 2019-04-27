# vue基础语法
## 模板语法
+ mustache {{msg}}
+ html赋值 v-html=""
+ 绑定属性v-bind:id=""
+ 使用表达式 {{ok?"YES","NO"}}
+ 文本赋值 v-text=""
+ 指令v-if=""
+ 过滤器 {{message|capitalize}}和v-bind:id="rawid|formatid"
## Class和Style绑定
+ 对象语法：v-bind:class="{active:isActive,'text-danger':hasError}" 适合多类名或动态的类名
+ 数组语法：v-bind:class ="[activeClass,errorClass]" 适合较少的类名
+ style绑定-对象语法：v-bind:style="{color:activeColor,fontSize:fontSize+'px'}"
## 条件渲染
+ v-if (若是false则dom节点不会被渲染进节点树)
+ v-else
+ v-else-if
+ v-show (通过display属性控制，但是节点树里有这个节点，这是和v-if的根本性区别)
+ v-cloak(这个其实不是条件渲染，如果页面刷新太快，导致某些页面没有刷新出来，v-cloak可以同步隐藏这些代码)
## vue事件处理器
+ v-on:click="greet" @click="greet"
+ v-on:click.stop v-on:click.stop.prevent(阻止默认事件) v-on:click.self(给对象本身绑定事件，子级不触发) v-on:click.once(一次性事件)
+ v-on:keyup.enter
    + .enter
    + .tab
    + .delete (捕获删除和退格键)
    + .esc
    + .space
    + .up
    + .down
    + .left
    + .right
## vue组件
+ 全局组件和局部组件
+ props
  + 父子组件通讯-数据传递 (父->子)
+ Slot
  + 插槽在组件抽象设计中的应用
+ 自定义事件
  + 父子组件通信（子->父）
