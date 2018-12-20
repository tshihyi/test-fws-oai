const farmers = require('./secret/profile-farmers-data.json') 

const rurInf = (I,i) => {
    I.click('農保資料')
    I.waitForNavigation()
    I.checkOption({name:'InsureStatus'})
    I.wait(3)
    I.fillField({name:'ROC_AddDate'},farmers[i].ROC_AddDate)
    I.selectOption({name:'InsureHouseStatusID'},farmers[i].InsureHouseStatusID)
    I.amAcceptingPopups()
    I.click('確認儲存')
    I.waitForNavigation()
    I.acceptPopup()
}

module.exports = rurInf