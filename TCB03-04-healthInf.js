Feature('TCB03-04-健保資料')

const login = require('./login.js')
const farmers = require('./secret/profile-farmers-data.json')
const heaInf = require('./heaInf.js')
const search = requre('./search.js')

Before(I => {
  login(I)
  I.amOnPage('/Insure/List')
})

Scenario('健保資料', I => {
    i = 1
    search(I,i)
    heaInf(I,i)
    I.amAcceptingPopups()
    I.click('確認儲存')
    I.waitForNavigation()
    I.acceptPopup()
}) 