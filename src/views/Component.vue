<template>
  <div>
    <h3>-----------------通过 Prop 向子组件传递数据----------------------</h3>
    <blog-post title="my"></blog-post>
    <blog-post title="you"></blog-post>
    <blog-post title="he"></blog-post>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <blog-post v-for="post in posts" :key="post.id" :title="post.title" @enlarge-text="onEnlargeText"></blog-post>
    </div>
    <h3>-------------------------在组件上使用 v-model--------------------------</h3>
    <custom-input v-model="searchText" ></custom-input>
    <h3>-------------------插槽分发内容-------------------------</h3>
    <alert-box>something had happened</alert-box>
    <h3>----------------------------动态组件---------------------------</h3>
    <p>组件切换用Vue 的 component 元素加一个特殊的 is attribute 来实现</p>
    <div>
      <button v-for="tab in tabs" :key="tab" :class="['tab-button',{active:currentTab === tab}]" @click="currentTab=tab">
        {{ tab }}
      </button>
      <component v-bind:is="currentTabComponent" class="tab"></component>
    </div>


  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import CustomInput from '../components/CustomInput';
import AlertBox from '../components/AlertBox'
import TabHome from '../components/tab/TabHome'
import TabPost from '../components/tab/TabPost'
export default {
  name: 'Component',
  components:{
  BlogPost,
  CustomInput,
  AlertBox,
  TabHome,
  TabPost
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize: 1,
      currentTab: 'Home',
      tabs: ['Home', 'Post']
    }
  },
  computed: {
    currentTabComponent() {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  },
  methods:{
    onEnlargeText(enlargeAmount) {
    this.postFontSize += enlargeAmount
  }
  }
};
</script>

<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.demo-tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>