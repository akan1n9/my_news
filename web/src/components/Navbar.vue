<!--
 * @作者: kerwin
-->
<template>
  <div class="navbar">
    <el-menu
      :default-active="route.fullPath"
      class="el-menu-demo"
      mode="horizontal"
      :router="true"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/news">新闻中心</el-menu-item>
      <el-menu-item index="/product">产品与服务</el-menu-item>
      <el-menu-item index="" @click="handleClick">登录</el-menu-item>
    </el-menu>
    <div class="right">官网</div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

const handleClick = () => {
  window.location = "http://localhost:8080";
};
</script>
<style scoped lang="scss">
.navbar {
  position: sticky;
  top: 0px;
  z-index: 1000;
}
.el-menu{
  background-color: #002fa7;
  opacity: 0.88;
}
.el-menu--horizontal>.el-menu-item{
  color: #fff;
}
.right {
  position: fixed;
  top: 0;
  right: 20px;
  widows: 100px;
  height: 59px;
  line-height: 59px;
  text-align: center;
  color: #fff;
}
</style>
