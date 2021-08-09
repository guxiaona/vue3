<template>
  <div class="base">
    <span v-once>这个将不会改变: {{ msg }}</span>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <button v-bind:disabled="isButtonDisabled">按钮</button>
    <p v-if="seen">现在你看到我了</p>
    <a :href="url"> 静态参数 </a>
    <br> 
    <a :[attributeName]="url"> 动态参数
      （当attributeName值为 "href"，那么这个绑定将等价于 v-bind:href） </a>
      <p>动态参数注意点：会被强制转为小写，所以避免使用大写；在html中的动态参数表达式不使用空格和引号，可用计算属性来替代
      </p>
    <br>
    <a @click="doSomething" style="
    cursor:pointer"> 点击事件</a>
    <br>
    <a @[eventName]="doSomething">动态参数
      （当eventName的值为"click"时，v-on:[eventName]将等价于 v-on:click,即点击事件）
    </a>
    
    <h3>组件</h3>
    <HelloWorld msg="Welcome"/>
    <todo-item class="to" :class="{ active: isActive }"></todo-item>
    <!-- <TodoItem></TodoItem> -->
    <!-- <TodoItem/> -->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import TodoItem from '@/components/TodoItem.vue'

export default {
  name: 'Base',
  components: {
    HelloWorld,
    TodoItem,
  },
  data(){
    return{
      count:2,
      msg:"因为v-once为一次性插值",
      rawHtml: '<span style="color: red">This should be red.</span>',
      isButtonDisabled:true,
      seen:true,
      url:"111",
      attributeName:"href",
      eventName:"click",
      isActive:true,
      
    }
  },
  created(){
    console.log('count is: ' + this.count)
  },

  methods:{
    doSomething(){
      console.log("点击了");
      console.log(this.$data.count) // => 4
      console.log(this.count)       // => 4
    },
  }
}
</script>
