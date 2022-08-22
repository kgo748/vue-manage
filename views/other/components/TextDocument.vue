<template>
  <div>
    <!-- 推荐；直接使用父组件的值 -->
    子组件TextDocument: <input type="text" :value="title" @input="handleChange($event)">
  </div>
</template>

<script>
export default {
  name: "TextDocument",
  props: {
    title: {
        type: String,
        default: "",
    }
  },
  methods: {
    handleChange($event) {
      // console.log($event, $event.target.value);
      // 调用父组件提供的方法
      this.$emit('update:title', $event.target.value)
    }
  }
};
</script>

<style scoped lang="less"></style>
