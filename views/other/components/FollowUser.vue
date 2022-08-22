<template>
  <el-button type="primary" v-if="isFollowed" :loading="loading" @click="onFollow">已关注</el-button>
  <el-button v-else :loading="loading" @click="onFollow">关注</el-button>
</template>

<script>
// import { addFollow, deleteFollow } from "@/api/user";

export default {
  name: "FollowUser",
  components: {},
  // 自定义 v-model 的数据名称
  model: {
    prop: "isFollowed", // 接收的父组件的值
    event: "update-is_followed", // 接收的父组件的方法
  },
  props: {
    isFollowed: {
      type: Boolean,
      required: true,
    },
    userId: {
      type: [Number, String, Object],
      required: true,
    },
  },
  data() {
    return {
        loading: false
    };
  },
  mounted() {
    // console.log(this.isFollowed);
  },
  methods: {
    async onFollow() {
      this.loading = true; // 展示关注按钮的 loading 状态
      try {
        /// 更新视图状态
        /* if (this.isFollowed) {
          // 已关注，取消关注，执行逻辑
          //   await deleteFollow(this.userId);
          this.is_followed = false
        } else {
          // 没有关注，添加关注，执行逻辑
          //   await addFollow(this.userId);
          this.is_followed = true
        } */

        /// 或简写，直接取反
        // this.is_followed = !this.is_followed
        
        /// 调用方法
        this.$emit("update-is_followed", !this.isFollowed); // 或直接参数取反传递过去
        // this.$emit('input', !this.value)
        // this.$emit('update-is_followed', !this.value)
        this.loading = false
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped lang="less"></style>
