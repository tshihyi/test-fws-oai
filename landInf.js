const farmers = require('./secret/profile-farmers-data.json') 

const landInf = (I,i) => {
    I.click('土地資料')
    I.wait(3)
    I.click('新增土地資料')
    I.wait(3)
    I.selectOption({name:'DDL_LandClass'},farmers[i].DDL_LandClass)
    I.selectOption({name:'IsSelf'},farmers[i].IsSelf)
    I.selectOption({name:'DDL_Relation'},farmers[i].DDL_Relation)
    if(farmers[i].DDL_Relation != '本人'){
        I.fillField({name:'LandName'},farmers[i].LandName)
        I.fillField({name:'LandIDCard'},farmers[i].LandIDCard)
    }
    I.selectOption({name:'County'},farmers[i].County)
    I.selectOption({name:'Area'},farmers[i].Area)
    I.selectOption({name:'PartI'},farmers[i].PartI)
    I.fillField({name:'NumI'},farmers[i].NumI)
    I.fillField({name:'NumII'},farmers[i].NumII)
    I.fillField({name:'HodNum'},farmers[i].HoldNum)
    I.fillField({name:'HoldDen'},farmers[i].HoldDen)
    I.fillField({name:'AreaM2'},farmers[i].AreaM2)
    I.click({name:'IsInsurance'})
}

module.exports = landInf