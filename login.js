const safeRequire = require('./safeRequired.js')

const login = (I, role = 'supervisor') =>{
    const {username,password} = safeRequire('./secret/profile0.json')[role]
    I.amOnPage('/')
    I.wait(1)
    I.fillField('Account', username)
    I.fillField('Password', password)
    I.click({css:'.btn-login.btn'})
    I.wait(3)
}

module.exports = login