<template>
  <div class="common-table">
    <el-table :data="tableData" height="90%" stripe :load="config2.loading">
      <!-- :key="item.prop" ??? -->
      <el-table-column
        show-overflow-tooltip
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :width="item.width ? item.width : 125"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- :current-page.sync="config2.page" -->
    <el-pagination
      class="pager"
      layout="prev, page, next"
      :total="config2.total"
      :current-page="config2.page"
      :page-size="20"
      @current-change="changePage"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "CommonTable",
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object,
  },
  data() {
    return {
        config2: this.config
    }
  },
  methods: {
    handleEdit(row) {
      // 调用父组件的方法
      this.$emit("edit", row);
    },
    handleDelete(row) {
      this.$emit("del", row);
    },
    // 框架的参数
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>

<style scoped lang="less">
.common-table {
  height: calc(100% -62px);
  background-color: #fff;
  position: relative;
  .pager {
    position: absolute;
    bottom: 0;
    right: 20px;
  }
}
</style>
