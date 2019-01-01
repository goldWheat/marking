<template>
  <div id="app">
    <div class="headerBox">
      <app-header></app-header>
    </div>
    <app-nav></app-nav>
    <div class="contentBox">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import NavList from './components/NavList'
export default {
  components:{
    appHeader:Header,
    appNav:NavList
  }
}
</script>

<style>
.headerBox{
  width: 100%;
  background:#fff;
  border-bottom: 1px solid #ccc;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
</style>
