const farmers = require('./secret/profile-farmers-data.json') 

const delNewIns = (I,i) => {
    I.amOnPage('/Insure/List')
    I.fillField({name:'SearchIDCard'},farmers[i].ID)
    I.click('送出查詢')
    I.waitForNavigation()
    I.click({css: 'input[type=checkbox]'})
    I.click('刪除')
}

module.exports = delNewIns