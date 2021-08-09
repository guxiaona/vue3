<template>
  <div>
    <h3>--------------多行文本 (textarea)----------------------</h3>
    <p>pre-line与pre-wrap都会自动换行，pre-line会把多个空格合并成一个。</p>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <br />
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <h3>----------------复选框 (Checkbox)-----------------</h3>
    <div id="v-model-multiple-checkboxes">
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span>
    <h3>--------------单选框 (Radio)------------------</h3>
    <input type="radio" id="one" value="one" v-model="picked">
    <label for="one">one</label>
    <input type="radio" id="two"  value="two" v-model="picked">
    <label for="two">two</label>
    <br>
    <span>picked:{{picked}}</span>
    <h3>------------------选择框 (Select)-------------</h3>
    <select v-model="selected">
      <!-- <option disabled value="">please select one</option> -->
      <option v-for="option in options" :key="option" :value="option.value">{{option.text}}</option>
    </select>
    <span>selected:{{selected}}</span>
    <h3>-------------------值绑定--------------------</h3>
    <p>对于单选，复选及选择框的选项，v-model绑定的值通常是静态字符串(对于复选框也可以是布尔值)，有时候值绑定到当前活动实例的一个动态 property 上，这时可以用 v-bind 实现，此外，使用 v-bind 可以将输入值绑定到非字符串</p>
</div>
  </div>
</template>

<script>
export default {
  name: 'VModel',
  data() {
    return {
      message:'',
      checkedNames: [],
      picked:'',
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>