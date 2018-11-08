Feature('職保批次投保')

const login = require('./login.js')
const farmers = require('./secret/profile-oai-farmers.json')
const id = farmers[0]["id"]

Before(I => {
  login(I)
  I.amOnPage('Insure/OccupationalInjuryInsureManualInput')
})

Scenario('職保批次投保-手動輸入身份證', I => {
    I.fillField('input#IDCard', id)
    I.click('button#InputBtn')
    I.waitForText("重複匯入")
})

Scenario('職保批次投保-手動輸入身份證', I => {
  I.fillField('input#IDCard', farmers[1]["id"])
  I.click('button#InputBtn')
  I.waitForText("送審中")
})