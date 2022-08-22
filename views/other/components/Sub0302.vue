<template>
  <div>
    <p>
      子组件: <input type="text" v-model="childData" @input="childDataChange" />
    </p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sub0302",
  props: {
    data: {
      default: "",
      type: String,
    },
  },
  data() {
    return {
      // 关联父组件的值
      childData: this.data,
    };
  },
  watch: {
    // 监听
    data() {
      this.childData = this.data;
    },
  },
  methods: {
    childDataChange() {
      this.$emit("update:data", this.childData); // 触发update:data将子组件值传递给父组件
    },
  },
};
</script>

<style scoped lang="less"></style>
