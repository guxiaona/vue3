<template>
  <div>
    <h4>{{title}}</h4>
    <button @click="$emit('enlarge-text',0.1)">
        Enlarge text
      </button>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props:['title'],
  emits: ['enlarge-text']
};
</script>

<style lang="scss" scoped>

</style>