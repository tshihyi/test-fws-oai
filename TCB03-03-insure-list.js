Feature('TCB03-03-職保新增')

const login = require('./login.js')
const farmers = require('./secret/profile-farmers-data.json')

Before(I => {
  login(I)
  I.amOnPage('/Insure/List')
})

Scenario('待審', I => {
  I.fillField('SearchIDCard', farmers[0].ID)
  I.click('送出查詢')
  I.waitForNavigation()
  I.click('編輯')
  I.waitForNavigation()
  I.click('職保資料')
  I.wait(1)
  I.checkOption({name:'InsureStatus'})
  I.wait(1)
  I.fillField({name:'ROC_ApplyDate'},'1070810')
  I.selectOption({name:'InsureHouseStatusID'},'正常')
  I.click('新增')
  I.selectOption({name:'EditCounty'}, farmers[0].County)
  I.selectOption({id:'EditArea'}, farmers[0].Area)
  I.selectOption({id:'EditPartI'}, farmers[0].PartI)
  I.fillField({id:'EditNumI'}, farmers[0].NumI)
  I.fillField({id:'EditNumII'}, farmers[0].NumI)
  I.click('完成')
  //I.checkOption({xpath: '//*[following::input[2]'})
  I.click('蔬菜')
  I.fillField({name:'CVegetable'}, farmers[0].Item)
  I.click('確認儲存')
})
