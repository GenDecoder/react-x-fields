module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'XFields',
      externals: {
        react: 'React'
      }
    }
  }
}
