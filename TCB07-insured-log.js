Feature('投保退保記錄')

const login = require('./login.js')
const farmers = require('./secret/profile-farmers.json')

Before(I => {
  login(I)
  I.amOnPage('/InsureLog/Index')
})

const searchInsuredLog = (I, id, name) => {
  I.fillField('SearchByIDCard', id)
  I.click('btnSearch')
  I.waitForNavigation()
  I.see(name)
}

Scenario('所有保險', I => {
  I.click('btnSearch')
  I.waitForNavigation()
  I.waitForText('保險類型')
  I.see('保險類型')

  I.selectOption('SearchByInsureType', '農保')
  searchInsuredLog(I, farmers[0].id, farmers[0].name)

  I.selectOption('SearchByInsureType', '職保')
  searchInsuredLog(I, farmers[2].id, farmers[2].name)

  I.selectOption('SearchByInsureType', '健保')
  searchInsuredLog(I, farmers[1].id, farmers[1].name)
})
