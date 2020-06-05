<template>
  <div id="app">
    <section id="container">
      <navmenu class="box1"/>
      <router-view class="box"></router-view>
    </section>
  </div>
</template>

<script>
import navmenu from './components/navmenu'

export default {
  name: 'App',
  components: {
    navmenu
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
.router-link-active{
    color:#9F6BA0;
}
#container{
  display: flex;
}
.box{
  height:calc(100vh - 2rem);
  padding-top:1rem;
  width:100%;
  padding-left: .5rem;
  padding-right: .5rem;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
margin: 0;
padding: 0;
font-family: 'Ubuntu', sans-serif;
}
</style>
