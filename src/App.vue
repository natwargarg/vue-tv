<template>
  <div class="navbar">
    <div class="nav-header__buttons">
       <div class="nav__links">
        <Search />
        <!--<router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import Search from "../src/components/Search.vue";

export default {
  name: "ShowItem",
  components: { Search },
  props: {},
  data() {
    return {
      message: "Hello World!",
    };
  },
  
};
</script>

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

body {
  margin: 0;
}

a {
  color: #2c3e50;
  text-decoration: none;
  padding: 0 16px 0 16px;
  padding: 0 16px 0 16px;
}

a.router-link-exact-active {
  color: #e1e9e5;
}

.shelf-grid__body,
hr {
  box-sizing: content-box;
}

a,
legend {
  color: inherit;
}

.navbar {
  width: 100%;
  top: 0;
  left: 0;
  border-bottom: 1px solid;
  overflow-x: hidden;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #000;
}
.nav__links {
  display: flex;
  padding: 0 16px 0 16px;
  margin-left: auto;
}
.nav-header__buttons {
  display: flex;
  padding: 8px;
  margin-left: auto;
}
</style>
