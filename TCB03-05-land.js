Feature('TCB03-05-土地資料')

const login = require('./login.js')
const farmers = require('./secret/profile-farmers-data.json')
const landInf = require('./landInf.js')
const search = require('./search.js')

Before(I => {
  login(I)
  I.amOnPage('/Land/Index')
})

Scenario('土地資料', I => {
  i = 2
  I.click('進階搜尋')
  I.wait(1)
  I.selectOption({name:'SearchCounty'},farmers[i].County)
  I.selectOption({name:'SearchArea'},farmers[i].Area)
  I.fillField({name:'SearchLandPart'},farmers[i].PartI)
  I.fillField({name:'SearchLandNum'},farmers[i].NumI+'-'+farmers[i].NumII)
  I.pressKey('Enter')
  I.wait(3)
  if(I.dontSee('修改')){
    I.amOnPage('/Insure/List')
    search(I,i)
    landInf(I,i)
    I.amAcceptingPopups()
    I.click('確認儲存')
    I.wait(1)
    I.acceptPopup()
  }else{
    I.amOnPage('/Insure/List')
    search(I,i)
    landInf(I,i)
    I.click('確認儲存')
    I.wait(2)
    I.amAcceptingPopups()
    I.click('確定')
    I.wait(1)
    I.acceptPopup()
  }
  I.wait(3)
  I.click('修改')
  I.waitForNavigation()
  if(farmers[i].QualificationID == "自耕農" || farmers[i].QualificationID == "配偶"){
    I.attachFile({id:'LandUseConsent'},'/照片測試.jpg')
  }else if(farmers[i].QualificationID == "佃農"){
    I.attachFile({id:'LandUseConsent'},'/照片測試.jpg')
  }
}) 