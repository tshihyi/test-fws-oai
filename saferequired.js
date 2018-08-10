const safeRequire = path => {
    try {
      return require(path)
    } catch (e) {
      console.log(`Please set username, password at ${path}`)
      return {
        username: '',
        password: ''
      }
    }
  }

module.exports = safeRequire