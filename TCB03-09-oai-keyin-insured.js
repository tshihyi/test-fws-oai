Feature('職保批次投保')

const login = require('./login.js')
const farmers = require('./secret/profile-oai-farmers.json')

Before(I => {
  login(I)
  I.amOnPage('Insure/OccupationalInjuryInsureManualInput')
})

Scenario('手動輸入身份證', I => {
    I.fillField('input#IDCard', farmers[0]["id"])
    I.click('button#InputBtn')
    /*I.waitForText("重複匯入")
    I.fillField('input#IDCard', farmers[1]["id"])
    I.click('button#InputBtn')
    I.waitForText("送審中")
    I.fillField('input#IDCard', farmers[2]["id"])
    I.click('button#InputBtn')
    I.waitForText("否")
    I.click(farmers[2]["name"])*/
    ////I.click('button.btn.default')
    //I.waitForText("基本資料")
    //I.click("button#DeleteOccupationalInjuryInsureBtn")
})