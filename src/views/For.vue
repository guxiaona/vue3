<template>
  <div>
    <ul id="array-rendering">
      <li class="example" v-for="(item,index) in items" :key="item.message">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
    <ul id="v-for-object" class="demo">
      <li v-for="(value, name, index) in myObject" :key="value">
      {{ index + 1 }}. {{ name }}: {{ value }}
      </li>
    </ul>
    <p>----------------------数组变更方法----------------------</p>
    <p>push() pop() shift() unshift() splice() sort() reverse()</p>
    <p>------------数组替换(不会变更原始数组，而总是返回一个新数组)-----------</p>
    <p>filter() concat() slice()</p>
    <p>----------------显示过滤/排序后的结果----------------</p>
    <p>计算属性实现</p>
    <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    <p>方法实现</p>
    <ul v-for="numbers in sets" :key="numbers">
      <li v-for="m in even(numbers)" :key="m">{{ m }}</li>
    </ul>
    <div id="range" class="demo">
      <span v-for="n in 10" :key="n">{{ n }} </span>
    </div>
    <p>v-for与v-if一同使用的话吧v-for放在v-if的上级</p>
  </div>
</template>

<script>
export default {
  name: 'For',
  data() {
    return {
      parentMessage: 'Parent',
      items: [{ message: 'Foo' }, { message: 'Bar' }],
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },
      numbers: [ 1, 2, 3, 4, 5 ],
      sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
    };
  },
  computed: {
  evenNumbers() {
    return this.numbers.filter(number => number % 2 === 0)
  }
},
methods: {
  even(numbers) {
    return numbers.filter(number => number % 2 === 0)
  }
}
};
</script>

<style lang="scss" scoped>

</style>