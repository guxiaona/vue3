<template>
  <div>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <!-- <input v-model="value"> -->
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: ['modelValue'],
  computed: {
    // get 方法应返回 modelValue property，或用于绑定的任何 property，set 方法应为该 property 触发相应的 $emit。
    value: {
      get() {
        return this.modelValue
      },
      set(value) { this.$emit('update:modelValue', value)
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>