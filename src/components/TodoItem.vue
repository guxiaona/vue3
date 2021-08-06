<template>
  <div class="todo">
    <ul>
      <li v-for="item in groceryList" v-bind:key="item.id">
        {{item.text}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'TodoItem',
  data() {
    return {
      groceryList: [
        { id: 0, text: '0' },
        { id: 1, text: '1' },
        { id: 2, text: '2' }
      ]
    }
  },
}
</script>

<style>

</style>