module.exports = {
    runtimeCompiler: true,
    devServer: {
        proxy: {
            '/api1': {
                target: "https://api.uixsj.cn", //代理目标的基本路径
                changeOrigion: true,
                pathRewrite: { '^/api1': '' }
            }
        }
    },
}