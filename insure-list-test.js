
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

Scenario('login sucess', I => {
  const {username, password} = safeRequire('./secret/profile0.json')
  //登入
  I.amOnPage('http://118.163.241.213:8081/')
  I.fillField('Account', username)
  I.fillField('Password', password)
  I.click({css:'.btn-login.btn'})
  I.wait(3)
  //點保戶資料
  I.amOnPage('http://118.163.241.213:8081/Insure/List')
  I.wait(3)
  I.click('楊日光')
  I.wait(3)
  // I.click('編輯')
  // I.wait(3)
  // I.click('職保資料')
  // I.wait(3)

})

