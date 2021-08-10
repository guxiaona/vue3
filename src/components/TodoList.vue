<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item">
        子组件自己的item       
        {{ item }} 
        使用父组件提供的slot内容  插槽 prop
        <slot :item="item"></slot>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      items: ['Feed a cat', 'Buy milk']
    };
  },
};
</script>

<style lang="scss" scoped>

</style>