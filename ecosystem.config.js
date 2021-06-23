module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      port: 8080,
      exec_mode: 'cluster',
      instances: 1, // max Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        NODE_ENV: 'production'
      },
    }
  ]
}

