const farmers = require('./secret/profile-farmers-data.json')

const basicInf = (I,i) => {
    I.click('新加保')
    I.wait(3)
    I.fillField({name:'ROC_ApplyDate'},farmers[i].ROC_ApplyDate)
    I.fillField({name:'Name'},farmers[i].Name)
    I.fillField({name:'IDCard'},farmers[i].ID)
    I.fillField({name:'ROC_Birthday'},farmers[i].Birth)
    I.selectOption({name:'MemberType'},farmers[i].MemberType)
    I.selectOption({name:'QualificationID'},farmers[i].QualificationID)
    I.fillField({name:'HouseID'},farmers[i].HouseID)
    I.selectOption({name:'HouseKingRelation'},farmers[i].HouseKingRelation)
    I.fillField({name:'HouseKingIDCard'},farmers[i].HouseKingIDCard)
    I.fillField({name:'TransAccount'},farmers[i].TransAccount)
    I.fillField({name:'TransName'},farmers[i].TransName)
    I.fillField({name:'addTel'},farmers[i].addTel)
    I.click({id:'addTelBtn'})
    I.selectOption({name:'CountyCode'},farmers[i].CountyCode)
    I.selectOption({name:'TownCode'},farmers[i].TownCode)
    I.selectOption({name:'VillageCode'},farmers[i].VillageCode)
    I.fillField({name:'LastAddress'},farmers[i].LastAddress)
    I.checkOption({id:'SameAsHouseAddress'})
    if(farmers[i].MemberType == '會員'){
        I.fillField({name:'ROC_MemberJoinDate'},farmers[i].ROC_MemberJoinDate)
    }
}

module.exports = basicInf