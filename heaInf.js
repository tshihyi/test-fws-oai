const farmers = require('./secret/profile-farmers-data.json') 

const heaInf = (I,i) => {
    I.click('健保資料')
    I.waitForNavigation()
    I.click('新增健保資料')
    I.waitForNavigation()
    I.checkOption({name:'InsureStatus'})
    I.wait(1)
    I.fillField({name:'ROC_AddDate'},farmers[i].ROC_AddDate)
    I.selectOption({name:'InsurerTitle'},farmers[i].InsurerTitle)
    I.checkOption({id:'SameAsInsureUser'})
    I.selectOption({name:'InsureHouseStatusID'},farmers[i].InsureHouseStatusIDH)
}

module.exports = heaInf