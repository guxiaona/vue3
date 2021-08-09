<template>
  <div>
    <h4 v-if="awesome">v-if条件true显示</h4>
    <h4 v-else>v-if条件false，v-else显示</h4>
    <h3 v-show="ok">条件为真显示。带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的CSS property display。</h3>
    <p>v-if “真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。</p>
    <p>v-if 惰性:如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。</p>
    <p>v-show 不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。</p>
    <p>一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。频繁切换用 v-show ；运行时条件很少改变用 v-if</p>
  </div>
</template>

<script>
export default {
  name: 'If',
  data() {
    return {
      awesome:true,
      ok:true
    };
  },
};
</script>

<style scoped>

</style>