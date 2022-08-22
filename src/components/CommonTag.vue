<template>
  <div class="tabs">
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      size="small"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
      >{{ tag.label }}</el-tag
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  mounted() {
    // console.log("CommonTag: ", this.tags);
  },
  methods: {
    ...mapMutations({
      close: "closeTag",
    }),
    // 切换页面
    changeMenu(tag) {
      // console.log(tag);
      this.$router.push({ name: tag.name });
    },
    // 关闭页面
    handleClose(tag, index) {
      // console.log(tag, index);
      const length = this.tags.length - 1;
      this.close(tag);
      // 如果点叉关闭的不是当前页面
      if (tag.name !== this.$route.name) {
        return;
      }
      // 如果点叉关闭的是当前页面
      // 如果点击的是最后一个tag
      if (length === index) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        // 如果不是最后一个tag
        this.$router.push({
          name: this.tags[index].name,
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
