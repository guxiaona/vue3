<template>
  <div class="computed">
    <p>Has published books:</p>
    <span>直接插值表达式{{auther.books.length > 0 ? 'yes':'no'}}</span>
    <br>
    <span>计算属性{{ publishedBooksMessage }}</span>
    <p>与方法不一样，计算属性是基于它们的反应依赖关系缓存的</p>
    <p>关于计算属性的setter：在DOM中运行this.fullName='gu xiaona' 调用setter显示结果</p>
  </div>
</template>
<script>


export default {
  name: 'Computed',
  data(){
    return{
      auther:{
        name:'gu xiaona',
        firstName:"gu",
        lastName:"xiaona",
        books:['vue2','vue3']
      }
    }
  },
  computed:{
    publishedBooksMessage(){
      return this.auther.books.length > 0 ? 'yes':'no'
    },
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
    }
  }
  }
}
</script>

