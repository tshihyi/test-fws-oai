Feature('TCB03-03-職保新增')

const login = require('./login.js')
const farmers = require('./secret/profile-farmers-data.json')
const basicInf = require('./basicInf.js')
const rurIns = require('./rurIns.js')
const heaIns = require('./heaIns.js')
const landInf = require('./landInf.js')
const delNewIns = require('./delNewIns.js')
const proIns = require('./proIns.js')
const cultivation = require('./cultivation.js')

Before(I => {
  login(I)
  I.amOnPage('/Insure/List')
})

// Scenario('職保', I => {
//   i = 2
//   proIns(I,i)
//   cultivation(I,i)
//   if((farmers[i].ReviewResult) != '待審'){
//     I.fillField({name:'ROC_ReviewDate'},'1070830')
//     I.wait(3)
//     I.attachFile({id:'ApplyDocumentFileUpload'},'/照片測試.jpg')
//   }
//   I.amAcceptingPopups()
//   I.click('確認儲存')
//   I.acceptPopup()
//   I.wait(3)
//   I.click('取消職保')
//   I.wait(3)
//   I.amAcceptingPopups()
//   I.click('確定')
//   I.acceptPopup()
// })

Scenario('新加保', I => {
  i = 4
  basicInf(I,i)
  I.amAcceptingPopups()
  I.click(farmers[i].InsType)
  I.acceptPopup()
  I.wait(3)
  if(farmers[i].InsType == '儲存，參加農健保'){
    rurIns(I,i)
    heaIns(I,i)
  }else if(farmers[i].InsType == '儲存，僅參加農保'){
    rurIns(I,i)
  }else if(farmers[i].InsType == '儲存，僅參加健保'){
    heaIns(I,i)
  }
  landInf(I,i)
  //delNewIns(I,i)
})