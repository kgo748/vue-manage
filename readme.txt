
创建项目：
	cmd>vue create vue-mange
	此项目选择Vue2，脚手架的版本不同，创建项目时一些插件库的选择也稍有不同；
启动：
	cmd>npm run serve

脚手架使用的5.0.4；
使用npm包管理器, v.8.3.1；
新建项目的依赖只有：
	"dependencies": {
		"core-js": "^3.8.3",
		"vue": "^2.6.14"
	}
添加一些需要的插件库，
cmd>npm install vue-router@3
cmd>npm install less@4 less-loader@8  倾向安装在开发依赖里
cmd>npm install vuex@3
cmd>npm install axios
cmd>npm install mockjs
cmd>npm install echarts

使用ElementUI
	安装在了开发依赖里，
		cmd>npm i element-ui --save-dev
	完全引入：
		import ElementUI from 'element-ui';
		import 'element-ui/lib/theme-chalk/index.css';
		Vue.use(ElementUI);
		以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入。

	按需引入：
		借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。
		无需引入样式文件；
		首先，安装 babel-plugin-component：
			cmd>npm install babel-plugin-component -D
		.babelrc即babel.config.js 文件添加配置并重启项目
			"plugins": [
				[
					"component",
					{
						"libraryName": "element-ui",
						"styleLibraryName": "theme-chalk"
					}
				]
			]

请求数据的方式写了2种：
	1.挂载再Vue原型上的$http
	2.定义的接口文件里使用封装好的请求工具