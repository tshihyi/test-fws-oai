
Feature('Insure list')

Scenario('test login', I => {
  I.amOnPage('http://118.163.241.213:8081/')
  I.fillField('Account','admin')
  I.fillField('Password','lcadmin@2814')
  I.wait(3)
  I.amOnPage('http://118.163.241.213:8081/')
  I.dontSee('您好')
})
