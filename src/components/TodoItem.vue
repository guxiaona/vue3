<template>
  <div class="todo">
    <li>
      {{title}}
      <button v-on:click="$emit('remove')">remove</button>
    </li>
    <!-- 我是子组件
    <ul>
      <li v-for="item in groceryList" v-bind:key="item.id">
        {{item.text}}
      </li>
    </ul> -->

  </div>
</template>

<script>
export default {
  name:'TodoItem',
  props:['title'],
  emits:['remove'],
  data() {
    return {
      // groceryList: [
      //   { id: 0, text: '0' },
      //   { id: 1, text: '1' },
      //   { id: 2, text: '2' }
      // ]
    }
  },
}
</script>

<style>

</style>