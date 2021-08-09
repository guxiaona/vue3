<template>
  <div id="todo-list-example" class="demo">
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">add a todo</label>
      <input v-model="newTodoText" id="new-todo" placeholder="todo">
      <button>Add</button>
    </form>
    <ul>
      <todo-item v-for="(todo,index) in todos" :key="todo.id" :title="todo.title" @remove="todos.splice(index,1)"></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem';
export default {
  name: 'Todo',
  components:{TodoItem},
  data() {
    return {
      newTodoText:'',
      todos:[
        {
          id:1,
          title:'to'
        },
        {
          id:2,
          title:'do'
        },
        {
          id:3,
          title:'list'
        },
      ],
      nextTodoId:4,
    };
  },
  methods: {
    addNewTodo(){
      this.todos.push({
        id:this.nextTodoId++,
        title:this.newTodoText
      })
      this.newTodoText=''
    }
  },
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
</style>