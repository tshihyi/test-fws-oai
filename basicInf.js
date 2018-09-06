const farmers = require('./secret/profile-farmers-data.json')

const basicInf = (I,i) => {
    I.click('新加保')
    I.wait(3)
    I.fillField({name:'Name'},farmers[i].Name)
    I.fillField({name:'IDCard'},farmers[i].ID)
    I.fillField({name:'ROC_Birthday'},farmers[i].Birth)
    I.fillField({name:'MemberType'},farmers[i].MemberType)
    I.fillField({name:'QualificationID'},farmers[i].QualificationID)
    I.fillField({name:'HouseID'},farmers[i].HouseID)
    I.fillField({name:'HouseKingRelation'},farmers[i].HouseKingRelation)
    I.fillField({name:'HouseKingIDCard'},farmers[i].HouseKingIDCard)
    I.fillField({name:'CountyCode'},farmers[i].CountyCode)
    I.fillField({name:'TownCode'},farmers[i].TownCode)
    I.fillField({name:'VillageCode'},farmers[i].VillageCode)
    I.fillField({name:'LastAddress'},farmers[i].LastAddress)
    if(farmers[i].MemberType == '會員'){
        I.fillField({name:'ROC_MemberJoinDate'},farmers[i].ROC_MemberJoinDate)
    }
}

module.exports = basicInf