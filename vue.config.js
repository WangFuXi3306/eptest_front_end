const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	assetsDir: './',
	outputDir: 'dist',
	//publicPath: './',
	//publicPath: './eptest',
	//outputDir: '/usr/local/nginx/static/eptest',
	publicPath: '',
	devServer: {
		port: 8080,//  ====>> 生产环境的域名端口号，一般默认为80
		host:'0.0.0.0',
		disableHostCheck: true,
		proxy: {
			// 生产环境
			// '/h5': {
			// 	target: 'http://111.28.134.17:80/ywh-h5/h5',
			// 	ws: true,
			// 	changeOrigin: true, // 是否跨域
			// 	pathRewrite: { // 重写路径
			// 		'^/h5': ''
			// 	}
			// },

			// 周 http://http://192.168.0.135:19001/ywh-h5/swagger-ui.html#!
			'/api': {
				//target: 'http://192.168.0.137:19001/ywh-h5/h5',
        target: 'http://localhost:8081/hzdapi_test',
				ws: true,
				changeOrigin: true, // 是否跨域
				pathRewrite: { // 重写路径
					'^/api': ''
				}
			},
		}
	},

	configureWebpack: {
		resolve: {
			extensions: ['.js', '.vue', '.json'],
			alias: {
				'@': resolve('src'),
				'~': resolve('src/components'),
				'utils': resolve('src/utils')
			}
		}
	},

}
