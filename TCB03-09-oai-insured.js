Feature('職保批次投保')

const login = require('./login.js')

Before(I => {
  login(I)
  I.amOnPage('/Insure/OccupationalInjuryInsureBatchImportHistory')
})

Scenario('批次投保匯入瀏覽', I => {
    I.see('新增匯入')
})