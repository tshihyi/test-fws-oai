Feature('TCB03-01-基本資料')

const login = require('./login.js')
const farmers = require('./secret/profile-farmers-data.json')
const basicInf = require('./basicInf.js')

Before(I => {
    login(I)
    I.amOnPage('/Insure/List')
})

Scenario('基本資料', I => {
    i = 1
    basicInf(I,i)
    I.amAcceptingPopups()
    I.click('儲存，僅參加健保')
    I.acceptPopup()
    I.waitForNavigation()
})