Feature('投保退保記錄')

const login = require('./login.js')
const farmers = require('./secret/profile-farmers.json')

Before( I =>{
  login(I)
  I.amOnPage('/InsureLog/Index')
})

Scenario('所有保險', I => {
  I.click('btnSearch')
  I.waitForNavigation()
  I.waitForText('保險類型')
  I.see('保險類型')
})

Scenario('農保', I => {
  I.selectOption('SearchByInsureType', '農保')
  I.fillField('SearchByIDCard', farmers[0].id)
  I.click('btnSearch')
  I.waitForNavigation()
  I.see(farmers[0].name)
})

Scenario('職保', I => {
  I.selectOption('SearchByInsureType', '職保')
  I.fillField('SearchByIDCard', farmers[2].id)
  I.click('btnSearch')
  I.waitForNavigation()
  I.waitForText(farmers[2].name)
})

Scenario('健保', I => {
  I.selectOption('SearchByInsureType', '健保')
  I.fillField('SearchByIDCard', farmers[1].id)
  I.click('btnSearch')
  I.waitForNavigation()
  I.see(farmers[1].name)
})