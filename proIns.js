const farmers = require('./secret/profile-farmers-data.json') 

const proIns = (I,i) => {
    I.fillField('SearchIDCard', farmers[i].ID)
    I.click('送出查詢')
    I.waitForNavigation()
    I.click('編輯')
    I.waitForNavigation()
    I.click('職保資料')
    I.wait(1)
    I.checkOption({name:'InsureStatus'})
    I.wait(1)
    I.fillField({name:'ROC_AddDate'},'1070810')
    I.selectOption({name:'InsureHouseStatusID'},farmers[i].InsureHouseStatusID)
    I.click('新增')
    I.selectOption({name:'EditCounty'}, farmers[i].County)
    I.selectOption({id:'EditArea'}, farmers[i].Area)
    I.selectOption({id:'EditPartI'}, farmers[i].PartI)
    I.fillField({id:'EditNumI'}, farmers[i].NumI)
    I.fillField({id:'EditNumII'}, farmers[i].NumII)
    I.click('完成')
    //I.click({css: 'tr:nth-child(1)'})
    //I.checkOption({xpath: '//*[following::input[2]'})
    I.click(farmers[i].Object)
    I.selectOption({name:'ReviewResult'}, farmers[i].ReviewResult)
}

module.exports = proIns
