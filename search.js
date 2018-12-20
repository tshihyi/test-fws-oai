const farmers = require('./secret/profile-farmers-data.json') 

const search = (I,i) => {
    I.fillField({name:'SearchIDCard'},farmers[i].ID)
    I.click('送出查詢')
    I.waitForNavigation()
    I.click('編輯')
    I.waitForNavigation()
}

module.exports = search