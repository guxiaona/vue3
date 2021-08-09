<template>
  <div class="computed">
    <p>Has published books:</p>
    <span>直接插值表达式{{auther.books.length > 0 ? 'yes':'no'}}</span>
    <br>
    <span>计算属性{{ publishedBooksMessage }}</span>
    <p>与方法不一样，计算属性是基于它们的反应依赖关系缓存的</p>
    <p>关于计算属性的setter：在DOM中运行this.fullName='gu xiaona' 调用setter显示结果</p>
    <!-- <div id="watch-example" class="demo">
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
    </div> -->
    <p>{{fullName}}</p>
    <p>------------------class和style绑定----------------</p>
    <div :class="classObject">计算属性绑定Class返回对象语法</div>
    <div :class="[activeClass, errorClass]">绑定Class返回数组语法</div>
    <div :class="[{ active: isActive }, errorClass]">在数组语法中也可以使用对象语法</div>

    <div :style="styleObject">绑定style对象语法</div>
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">style 绑定中的 property 提供一个包含多个值的数组，只会渲染数组中最后一个被浏览器支持的值</div>

</div>
</template>

<script>
export default {
  name: 'Computed',
  data(){
    return{
      auther:{
        name:'gu xiaona',
        books:['vue2','vue3']
      },
      // question: '',
      // answer: 'Questions usually contain a question mark. ;-)'
      firstName: 'Foo',
      lastName: 'Bar',

      classObject: {
        active: true,
        'text-danger': false
      },

      activeClass: 'active',
      errorClass: 'text-danger',

      isActive:'active',

      styleObject:{
        color:'red',
        fontSize:'13px'
      }
    }
  },
  computed:{
    publishedBooksMessage(){
      return this.auther.books.length > 0 ? 'yes':'no'
    },
  //  fullName() {
  //     return this.firstName + ' ' + this.lastName
  //   }
    fullName: {
    // getter
    get() {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set(newValue) {
      const names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    },
  }
  },
  // watch: {
  //   // whenever question changes, this function will run
  //   question(newQuestion, oldQuestion) {
  //     if (newQuestion.indexOf('?') > -1) {
  //       this.getAnswer()
  //     }
  //   }
  // },
  // methods: {
  //   getAnswer() {
  //     this.answer = 'Thinking...'
  //     this.$axios
  //       .get('https://yesno.wtf/api')
  //       .then(response => {
  //       this.answer = response.data.answer
  //     })
  //       .catch(error => {
  //       this.answer = 'Error! Could not reach the API. ' + error
  //     })
  //   }
  // }
  classObject() {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
</script>

<style scoped>
/* .demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
} */
</style>