<template>
  <div>
    <button class="btn-primary">
      <slot>后备内容</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoButton',
};
</script>

<style lang="scss" scoped>

</style>