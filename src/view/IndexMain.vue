<template>
  <div class="flex-h">
    <div class="mode-left">
      <div class="title">练习模块</div>
      <el-menu
          :default-active="activeIndex2"
          @select="handleSelect"
          class="menu-vertical"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">消息中心</el-menu-item>
        <el-menu-item index="3">订单管理</el-menu-item>
        <el-submenu index="4">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </div>
    <div class="mode-right">
      <el-menu
          :default-active="activeIndex2"
          mode="horizontal"
          class="menu-horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4">订单管理</el-menu-item>
      </el-menu>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axiosApi from "../axiosApi/index.js";
export default {
  name: 'IndexMain',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  mounted() {
    console.dir(axiosApi)
  },
  methods: {
    handleSelect(key, keyPath) {
      if (this.$route.fullPath !== '/first') {
        this.$router.push('first')
      }
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

.mode-left {
  width: 300px;
  height: 100vh;
}
.title {
  font-size: 20px;
  height: 56px;
  line-height: 56px;
  text-align: center;
  background-color: #545c64;
  color: #fff;
}
.menu-vertical {
  width: 100%;
  height: calc(100% - 56px);
  border-right: none;
}
.mode-right {
  width: calc(100vw - 300px);
  height: 100vh;
}
.menu-horizontal {
  min-width: 1200px;
  width: 100%;
}
.content {
  height: calc(100% - 61px);
  overflow-y: auto;
}
</style>