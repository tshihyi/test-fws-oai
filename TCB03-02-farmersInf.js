Feature('TCB03-02-農保資料')

const login = require('./login.js')
const farmers = require('./secret/profile-farmers-data.json')
const rurInf = require('./rurInf.js')
const search = require('./search.js')

Before(I => {
    login(I)
    I.amOnPage('/Insure/List')
})

Scenario('農保資料', I => {
    i = 2
    search(I,i)
    rurInf(I,i)
})