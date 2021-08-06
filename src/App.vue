<template>
  <div id="nav">
    <router-link to="/">模板语法</router-link> |
    <router-link to="/method">方法节流防抖</router-link>|
    <router-link to="/computed">计算属性和侦听器</router-link>

  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
