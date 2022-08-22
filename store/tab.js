export default {
  state: {
    isCollapse: false, // 是否折叠
    tabsList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "home",
      },
    ], // 面包屑
    currentMenu: null,
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    selectMenu(state, val) {
      if (val.name !== "home") {
        state.currentMenu = val;
        const result = state.tabsList.findIndex(
          (item) => item.name === val.name
        );
        // 如果不存在
        if (result === -1) {
          state.tabsList.push(val);
        }
        // console.log('selectMenu: ', val, result, state.tabsList);
      } else {
        state.currentMenu = null;
      }
    },
    closeTag(state, val) {
      const result = state.tabsList.findIndex((item) => item.name === val.name);
      state.tabsList.splice(result, 1);
    },
  },
};
