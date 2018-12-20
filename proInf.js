const farmers = require('./secret/profile-farmers-data.json') 

const proInf = (I,i) => {
    I.click('職保資料')
    I.waitForNavigation()
    I.checkOption({name:'InsureStatus'})
    I.wait(1)
    I.fillField({name:'ROC_ApplyDate'},farmers[i].ROC_ApplyDate)
    I.fillField({name:'ROC_AddDate'},'1071125')
    I.selectOption({name:'InsureHouseStatusID'},farmers[i].InsureHouseStatusID)
    I.click('新增')
    I.wait(1)
    I.selectOption({name:'EditCounty'}, farmers[i].County)
    I.selectOption({id:'EditArea'}, farmers[i].Area)
    I.selectOption({id:'EditPartI'}, farmers[i].PartI)
    I.fillField({id:'EditNumI'}, farmers[i].NumI)
    I.fillField({id:'EditNumII'}, farmers[i].NumII)
    I.click('儲存')

    I.click(farmers[i].CultivatedCrops)
    if(farmers[i].CultivatedCrops == '雜糧'){
        I.fillField({name:'CGrain'}, farmers[i].Item)
    }else if(farmers[i].CultivatedCrops == '蔬菜'){
        I.fillField({name:'CVegetable'}, farmers[i].Item)
    }else if(farmers[i].CultivatedCrops == '花卉'){
        I.fillField({name:'CFlower'}, farmers[i].Item)
    }else if(farmers[i].CultivatedCrops == '果樹'){
        I.fillField({name:'CFruitTree'}, farmers[i].Item)
    }else if(farmers[i].CultivatedCrops == '畜牧'){
        I.fillField({name:'CLivestock'}, farmers[i].Item)
    }else if(farmers[i].CultivatedCrops == '其他'){
        I.fillField({name:'COther'}, farmers[i].Item)
    }
    
    I.click('栽培設施')
    I.click(farmers[i].CultivationFacilities)
    I.click('設備機械')
    I.click(farmers[i].Machineries)
    I.selectOption({name:'ReviewResult'}, farmers[i].ReviewResult)
    if(farmers[i].ReviewResult != '待審'){
        I.fillField({name:'ROC_ReviewDate'},'1070830')
    }
    I.attachFile({id:'ApplyDocumentFileUpload'},'/照片測試.jpg')
}

module.exports = proInf
