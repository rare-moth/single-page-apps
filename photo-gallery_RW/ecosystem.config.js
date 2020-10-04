module.exports = {
  apps: [{
    name: 'simple-rest-api',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'www.SAMPLE.com',
      key: '~/.ssh/SAMPLE-ssh.pem',
      ref: 'origin/master',
      repo: 'git@github.com:soosa/simple-rest-api.git',
      path: '/home/ubuntu/simple-rest-api',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
