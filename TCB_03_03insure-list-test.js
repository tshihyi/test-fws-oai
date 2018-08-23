
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
  I.amOnPage('/')
  I.wait(1)
  I.fillField('Account', username)
  I.fillField('Password', password)
  I.click({css:'.btn-login.btn'})
  I.wait(3)
  //點保戶資料
  I.amOnPage('/Insure/List')
  I.amOnPage('/Insure/Edit/1199149')
  I.wait(3)
  I.click('職保資料')
  I.wait(1)
  I.checkOption({name:'InsureStatus'})
  I.wait(1)
  I.fillField({name:'ROC_ApplyDate'},'1070810')
  I.selectOption({name:'InsureHouseStatusID'},'正常')
  I.click('新增')
  I.checkOption({xpath:'//*[@class=EditIsInsure]'})
  I.selectOption({name:'EditCounty'},'宜蘭縣')
  I.selectOption({id:'EditArea'},'礁溪鄉')
  I.selectOption({id:'EditPartI'},'得石新')
  I.fillField({id:'EditNumI'},'0293')
  I.fillField({id:'EditNumII'},'0000')
  I.click('完成')
  I.click('蔬菜')
  I.fillField({name:'CVegetable'},'高麗菜')
  I.click('確認儲存')

})
