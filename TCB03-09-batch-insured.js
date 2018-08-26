Feature('TCB03-09-職保批次投保')

const login = require('./login.js')
const farmers = require('./secret/profile-farmers.json')

Before(I => {
  login(I)
  I.amOnPage('/Insure/OccupationalInjuryInsureBatchImportHistory')
})

Scenario('下載申請表', I => {
  I.see('批次投保匯入瀏覽')
  I.see('瀏覽結果')
  I.click({css: '#ListForm tr:nth-child(7) a'})
  I.wait(3)
  I.dontSee("成功(0)")
  downloadApplication(I, '#ui-id-1')
  I.dontSee("異常(0)")
  downloadApplication(I, '#ui-id-2')
})

const downloadApplication = (I, tabTitle) => {
  I.click({css:  tabTitle})
  I.wait(3)
  I.click({css: '#ListForm tr:nth-child(2) .download-section a'})
  I.wait(3)
}

Scenario('查詢匯入記錄', I => {
  I.see('批次投保匯入瀏覽')
  logQuery(I, '檔案匯入')
  logQuery(I, '手機掃描')
})

const logQuery = (I, importMethod) => {
  I.click('進階搜尋', {css: '.search-list'})
  I.see('匯入方式')
  I.selectOption('SearchImportType', importMethod)
  I.click('查詢', {css: '.search-list.search_panel'})
  I.wait(3)
  I.see(importMethod)
}