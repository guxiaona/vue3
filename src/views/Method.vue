<template>
  <div class="method">
    <button @click="increment">{{count}}+</button>
    <button @click="throttledClick">节流第一个人说了算</button>
    <button @click="debounceClick()">防抖最后一个人说了算</button>
  </div>
</template>
<script>
import _ from 'lodash'

export default {
  name: 'Method',
  components: {
  },
  data(){
    return{
      count:2,
    }
  },
  created(){
    this.throttledClick = _.throttle(this.click,2000)
  },
  unmounted(){
    this.throttledClick.cancel()
  },
  methods:{
    click(){
      console.log('I get fired every two seconds!')
    },

    debounceClick: _.debounce(() => {
      console.log('I only get fired once every two seconds, max!')
    }, 2000),
  
    increment(){
      this.count++;
    }
  }
}
</script>

