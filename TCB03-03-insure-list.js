Feature('TCB03-03-職保資料')

const login = require('./login.js')
const farmers = require('./secret/profile-farmers-data.json')
const proInf = require('./proInf.js')
const search = require('./search.js')

Before(I => {
  login(I)
  I.amOnPage('/Insure/List')
})

Scenario('職保資料', I => {
    i = 2
    search(I,i)
    proInf(I,i)
    I.amAcceptingPopups()
    I.click('確認儲存')
    I.waitForNavigation()
    I.acceptPopup()
}) 