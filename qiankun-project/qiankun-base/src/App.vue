<template>
  <div>
    <el-menu class="el-menu-demo" mode="horizontal" :router="true">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/vue">vue应用</el-menu-item>
      <el-menu-item index="/react">react应用</el-menu-item>
    </el-menu>
    <router-view/>
    <div id="vue"></div>
    <div id="react"></div>
  </div>
</template>

<style lang="scss">

</style>
