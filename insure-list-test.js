
Feature('Insure list')

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

Scenario('test login', I => {
  const {username, password} = safeRequire('./secret/profile0.json')

  I.amOnPage('http://118.163.241.213:8081/')
  I.fillField('Account', username)
  I.fillField('Password', password)
  I.wait(3)
  I.amOnPage('http://118.163.241.213:8081/')
  I.dontSee('您好')
  I.wait(1)
})
