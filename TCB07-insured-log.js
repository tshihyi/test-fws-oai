Feature('投保退保記錄')

const login = require('./login.js')
const farmers = require('./secret/profile-farmers.json')

Before( I =>{
  login(I)
  I.amOnPage('/InsureLog/Index')
})

Scenario('所有保險', I => {
  I.click('btnSearch')
  I.wait(3)
  I.waitForText('保險類型')
  I.see('保險類型')
})

Data(farmers).Scenario('農保', (I, current) => {
  const { id, name } = current
  I.selectOption('SearchByInsureType', '0')
  I.fillField('SearchByIDCard', id)
  I.click('btnSearch')
  I.wait(13)
  id != farmers[1].id ?
    I.see(name) :
    I.dontSee(name)
})

Data(farmers).Scenario('職保', (I, current) => {
  const { id, name } = current
  I.selectOption('SearchByInsureType', '2')
  I.fillField('SearchByIDCard', id)
  I.click('btnSearch')
  I.wait(13)
  id == farmers[2].id ?
    I.see(name) :
    I.dontSee(name)
})

Data(farmers).Scenario('健保', (I, current) => {
  const { id, name } = current
  I.selectOption('SearchByInsureType', '1')
  I.fillField('SearchByIDCard', farmers[1].id)
  I.click('btnSearch')
  I.wait(15)
  id == farmers[1].id ?
    I.see(name) :
    I.dontSee(name)
})