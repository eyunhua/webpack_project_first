var htmlWebpackPlugin = require('html-webpack-plugin');//引入html-webpack-plugin插件

module.exports = {
	entry: {//打包的入口文件chunk，可以是一个string字符串，也可以是一个数组，还可以是一个json对象
		hello: './src/script/hello.js',
		world: './src/script/world.js',
		good: './src/script/good.js',
		main: './src/script/main.js'//公用js
	},
	output: {//打包完的输出文件
		path: './dist',//打包输出文件的目录
		filename: 'js/[name].js',//打包输出的文件名
		publicPath: 'http://www.a.com'//项目上线输出时引用js等的路径不能是相对地址，应使用output里面的publicPath设置域名等绝对地址前缀
	},
	plugins: [//插件
		//初始化html插件
		//生成多个html文件，需要初始化多个htmlWebpackPlugin插件
		new htmlWebpackPlugin({
			template: 'src/index.html',//模板
			filename: 'hello.html',//编译后的文件名
			// inject: 'head',//想把脚本文件放在哪个标签内，head或者body
			inject: false,//不使用默认的将几个脚本放在一起，在模板html中单独设定
			title: 'this is hello.html', //页面的title，模板html可以通过引用这个变量展示到新的页面中
			// minify: {//压缩html
			// 	collapseWhitespace: true,//去除空格
			// 	removeComments: true //去除注释
			// },
			chunks: ['hello','main']//引入entry里面的哪一个chunk
		}),
		new htmlWebpackPlugin({
			template: 'src/index.html',//模板
			filename: 'world.html',//编译后的文件名
			// inject: 'head',//想把脚本文件放在哪个标签内，head或者body
			inject: false,//不使用默认的将几个脚本放在一起，在模板html中单独设定
			title: 'this is world.html', //页面的title，模板html可以通过引用这个变量展示到新的页面中
			// minify: {//压缩html
			// 	collapseWhitespace: true,//去除空格
			// 	removeComments: true //去除注释
			// },
			chunks: ['world','main']//引入entry里面的哪一个chunk
		}),
		new htmlWebpackPlugin({
			template: 'src/index.html',//模板
			filename: 'good.html',//编译后的文件名
			// inject: 'head',//想把脚本文件放在哪个标签内，head或者body
			inject: false,//不使用默认的将几个脚本放在一起，在模板html中单独设定
			title: 'this is good.html', //页面的title，模板html可以通过引用这个变量展示到新的页面中
			// minify: {//压缩html
			// 	collapseWhitespace: true,//去除空格
			// 	removeComments: true //去除注释
			// },
			chunks: ['good','main']//引入entry里面的哪一个chunk
		})
	]
}