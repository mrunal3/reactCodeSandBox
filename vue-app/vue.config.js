const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { 
    allowedHosts: ['.gitpod.io'],
    client: {
      webSocketURL: {
        port: process.env.GITPOD_WORKSPACE_ID ? 443 : undefined,
      },
    },
  },
})
