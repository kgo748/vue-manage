<template>
  <div>
    <parent-cmp-01></parent-cmp-01>
    <hr />
    <hr />
    <parent-cmp-02></parent-cmp-02>
    <hr />
    <parent-cmp-03></parent-cmp-03>
  </div>
</template>

<script>
/* 父子组件参数测试 */
import ParentCmp01 from './components/ParentCmp01.vue'
import ParentCmp02 from './components/ParentCmp02.vue'
import ParentCmp03 from './components/ParentCmp03.vue'

export default {
  name: "pageOne",
  components: {
    ParentCmp01,
    ParentCmp02,
    ParentCmp03,
  }
};
</script>

<style scoped lang="less"></style>
