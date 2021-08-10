<template>
  <div>
    <input 
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)">

    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'UserName',
  props: {
    firstName: String,
    lastName: String
  },
  // computed: {
  //   // get 方法应返回 modelValue property，或用于绑定的任何 property，set 方法应为该 property 触发相应的 $emit。
  //   value: {
  //     get() {
  //       return this.modelValue
  //     },
  //     set(value) { this.$emit('update:modelValue', value)
  //     }
  //   }
  // }
};
</script>

<style lang="scss" scoped>

</style>