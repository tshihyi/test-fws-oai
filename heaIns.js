const farmers = require('./secret/profile-farmers-data.json') 

const heaIns = (I,i) => {
    I.click('新增健保資料')
    I.wait(3)
    I.checkOption({name:'InsureStatus'})
    I.wait(5)
    I.click({id:'SameAsInsureUser'})
    I.selectOption({name:'InsureHouseStatusID'},farmers[i].InsureHouseStatusID)
    I.amAcceptingPopups()
    I.click('確認儲存')
    I.acceptPopup()
    I.wait(3)
}

module.exports = heaIns