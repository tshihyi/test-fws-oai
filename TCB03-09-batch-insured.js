Feature('TCB03-09-職保批次投保')

const login = require('./login.js')
const farmers = require('./secret/profile-farmers.json')

Before(I => {
  login(I)
  I.amOnPage('/Insure/OccupationalInjuryInsureBatchImportHistory')
})

Scenario('匯入檔案', I => {
  I.see('批次投保匯入瀏覽')
  I.click({css: '.btn.default'})
  I.amOnPage('/Insure/OccupationalInjuryInsureBatchImport')
  I.see('保戶資料批次匯入設定')
  I.checkOption('手機掃描身分證條碼')
  I.acceptPopup()
  I.amOnPage('/Insure/OccupationalInjuryInsureScanImport')
  I.see('QR-Code')
  I.click({css: '.btn.default'})
  I.amOnPage('/Insure/OccupationalInjuryInsureBatchImport')
  I.click({css: '.btn.default'})
  I.amOnPage('/Insure/OccupationalInjuryInsureBatchImport')
  I.attachFile('form input[name=ImportFile]', 'files/test-data')
  I.click('#ImportBtn')
})
