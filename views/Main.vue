<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <common-tag></common-tag>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../src/components/CommonAside.vue'
import CommonHeader from '../src/components/CommonHeader.vue'
import CommonTag from '../src/components/CommonTag.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Main",
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
  }
};
</script>

<style scoped lang="less">
.el-header {
    background-color: #333;
}
.el-main {
    background-color: #fff;
}
</style>
