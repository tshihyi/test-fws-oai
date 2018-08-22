Feature('TCB07-投保退保記錄')

const login = require('./login.js')
const farmers = require('./secret/profile-farmers.json')

Before(I => {
  login(I)
  I.amOnPage('/InsureLog/Index')
})

const searchInsuredLog = (I, {type, id, name}) => {
  I.selectOption('SearchByInsureType', type)
  I.fillField('SearchByIDCard', id)
  I.click('btnSearch')
  I.waitForNavigation()
  I.see(name)
}

Scenario('所有保險', I => {
  I.click('btnSearch')
  I.waitForNavigation()
  I.waitForText('保險類型')
  I.see('保險類型')

  searchInsuredLog(I, {
    type: '農保',
    id: farmers[0].id,
    name: farmers[0].name
  })

  searchInsuredLog(I, {
    type: '職保',
    id: farmers[2].id,
    name: farmers[2].name
  })

  searchInsuredLog(I, {
    type: '健保',
    id: farmers[1].id,
    name: farmers[1].name
  })
})
