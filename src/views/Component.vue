<template>
  <div>
    <h3>-----------------通过 Prop 向子组件传递数据----------------------</h3>
    <p>注 prop 会在一个组件实例创建之前进行验证</p>
    <blog-post title="my"></blog-post>
    <blog-post title="you"></blog-post>
    <blog-post title="he"></blog-post>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <blog-post v-for="post in posts" :key="post.id" :title="post.title" @enlarge-text="onEnlargeText"></blog-post>
    </div>
    <p>以下两种传递prop方法相同</p>
    <blog-post v-bind:id="post.id" v-bind:title="post.title"></blog-post>
    <blog-post v-bind="post"></blog-post>
    <h3>-------------------------在组件上使用 v-model--------------------------</h3>
    <div>
      <p>First name: {{ firstName }}</p>
      <p>Last name: {{ lastName }}</p>
      <user-name
        v-model:first-name="firstName"
        v-model:last-name="lastName"
      ></user-name>
    </div>
    <h3>-------------------插槽分发内容-------------------------</h3>
    <alert-box>something had happened</alert-box>
    <h3>----------------------------动态组件---------------------------</h3>
    <p>组件切换用Vue 的 component 元素加一个特殊的 is attribute 来实现</p>
    <div>
      <button v-for="tab in tabs" :key="tab" :class="['tab-button',{active:currentTab === tab}]" @click="currentTab=tab">
        {{ tab }}
      </button>
      <p>防止失活</p>
      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>
    </div>
    <h3>-------------------------插槽-----------------------</h3>
    <todo-button>
      <i class="fas fa-plus">1</i>
      Add todo
    </todo-button>
    <h3>-----------具名插槽----------------</h3>
    <base-layout>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
    </base-layout>
    <h3>----------------作用域插槽----------------</h3>
    <todo-list>
      <template v-slot:default="slotProps">
      <!-- 简写 -->
      <!-- <todo-list v-slot="slotProps"></todo-list> -->
      <!-- 多个插槽还是不简写 -->
        <i class="fas fa-check"></i>
        <span class="green">{{ slotProps.item }}</span>
      </template>
    </todo-list>
    <h4>插槽解构</h4>
    <todo-list v-slot="{ item: todo }">
      <i class="fas fa-check"></i>
      <span class="green">{{ todo }}</span>
    </todo-list>
    <p>语法糖：v-slot: 替换为字符 #</p>

  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import UserName from '../components/UserName';
import AlertBox from '../components/AlertBox'
import TabHome from '../components/tab/TabHome'
import TabPost from '../components/tab/TabPost'
import TodoButton from '../components/TodoButton.vue'
import BaseLayout from '../components/BaseLayout'
import TodoList from '../components/TodoList'

export default {
  name: 'Component',
  components:{
  BlogPost,
  UserName,
  AlertBox,
  TabHome,
  TabPost,
  TodoButton,
  BaseLayout,
  TodoList
  },
  data() {
    return {
      post: {
        id: 1,
        title: 'My Journey with Vue'
      },
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize: 1,
      currentTab: 'Home',
      tabs: ['Home', 'Post'],
      firstName: 'John',
      lastName: 'Doe',
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