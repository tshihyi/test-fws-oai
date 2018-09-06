const farmers = require('./secret/profile-farmers-data.json') 

const rurIns = (I,i) => {
    I.checkOption({name:'InsureStatus'})
    I.wait(5)
    I.selectOption({name:'InsureHouseStatusID'},farmers[i].InsureHouseStatusID)
    I.amAcceptingPopups()
    I.click('確認儲存')
    I.acceptPopup()
    I.wait(3)
}

module.exports = rurIns