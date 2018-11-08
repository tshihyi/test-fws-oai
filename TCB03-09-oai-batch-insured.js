Feature('職保批次投保')

const login = require('./login.js')
const farmers = require('./secret/profile-farmers.json')
const id = farmers[0]["id"]

Before(I => {
  login(I)
  I.amOnPage('Insure/OccupationalInjuryInsureManualInput')
})

Scenario('職保批次投保-手動輸入身份證', I => {
    I.fillField('input#IDCard', id)
    I.click('button#InputBtn')
    I.waitForText("職保已投保，請勿重複投保")
})