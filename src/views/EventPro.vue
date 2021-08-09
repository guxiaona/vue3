<template>
  <div>
    <button @click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times</p>

    <div id="event-with-method">
    <!-- `greet` 在下面定义的方法名 -->
    <button @click="greet">Greet</button>
    </div>

    <div id="inline-handler">
      <button @click="say('hi')">Say hi</button>
      <button @click="say('what')">Say what</button>
    </div>

    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>

    <button @click="one($event), two($event)">
      事件处理多方法用逗号分隔
    </button>
    <h3>-------------事件修饰符--------------</h3>
    <p>.stop阻止事件 .prevent不再重载 .capture捕获模式，内部元素出发时间在此处理 .self自身触发 .once只触发一次 .passive立即触发</p>
    <h3>-------------按键修饰符@keyup--------------</h3>
    <p>.enter .tab .delete (捕获“删除”和“退格”键) .esc .space .up .down .left .right</p>
    <h3>-------------系统修饰键--------------</h3>
    Alt + Enter
    <input @keyup.alt.enter="clear" />
    <br>
    Ctrl + Click
    <div @click.ctrl="doSomething">Do something</div>
    <br>
    即使别的系统键和ctrl一同按下也会触发
    <button @click.ctrl="onClick">A</button> 
    <br>
    有且只有 Ctrl 被按下的时候才触发
    <button @click.ctrl.exact="onCtrlClick">A</button>
    <br>
    没有任何系统修饰符被按下的时候才触发
    <button @click.exact="onClick1">A</button>
    <p>鼠标按钮修饰符 .left .right .middle</p>
  </div>
</template>

<script>
export default {
  name: 'Eventpro',
  data() {
    return {
      counter: 1,
      name: 'Vue.js'
    };
  },

  mounted() {
    
  },

  methods: {
    greet(event) {
      // `this` 内部 `methods` 指向当前活动实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM event
      if (event) {
        alert(event.target.tagName)
      }
    },
    say(message) {
      alert(message)
    },
    warn(message, event) {
    // now we have access to the native event
    if (event) {
      event.preventDefault()
    }
    alert(message)
  },
  clear(){
    console.log('clear');
  },
  doSomething(){
    console.log('doSomething');
  },
  onClick(){
    console.log('onClick');
  },
  onCtrlClick(){
    console.log('onCtrlClick');
  },
  onClick1(){
    console.log('onClick1');
  }
  },
};
</script>

<style lang="scss" scoped>

</style>