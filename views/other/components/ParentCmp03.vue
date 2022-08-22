<template>
  <div>
    <!-- 1.v2.2.0+ 新增model通过model属性实现；同 Sub01中的方法 -->
    <p>
        父组件: <input type="text" v-model="value" />
    </p>
    <!-- 完整版 -->
    <!-- <Sub03 :value="value" @childValueChange="(val) => {value = val;}"></Sub03> -->
    <!-- 简写等价于 -->
    <Sub03 v-model='value'></Sub03>
    <hr />

    <!-- 2.sync修饰符（v2.3.0+ 新增） -->
    <p>
        父组件: <input type="text" v-model="data">
    </p>
    <!-- 在使用.sync修饰符的时候，只需要注意v-bind:xx，v-on:update:xx，v-bind:xx.sync的差异就行了，但是注册事件的时候一定要用this.$emit( ‘update:xx’ )。 -->
    <!-- 完整版 -->
    <!-- <Sub0302 :data.sync='data' v-on:update:data="data = $event"></Sub0302> -->
    <!-- 简写 -->
    <Sub0302 :data.sync='data'></Sub0302>
  </div>
</template>

<script>
/* 父子组件数据双向绑定---思想同 ParentCmp02所测试的  */
import Sub03 from './Sub03.vue'
import Sub0302 from './Sub0302.vue'
export default {
  name: "ParentCmp03",
  components: { Sub03, Sub0302 },
  data() {
    return {
      value: "父组件的数据",
      data:'父组件的数据'
    };
  },
};
</script>

<style scoped lang="less"></style>
