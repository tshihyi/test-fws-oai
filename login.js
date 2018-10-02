const safeRequire = require('./saferequired.js')

const login = I => {
    const {username, password} = safeRequire('./secret/profile0.json')
    I.amOnPage('/')
    I.fillField('Account', username)
    I.fillField('Password', password)
    I.click({css:'.btn_login.btn-login'})
    I.wait(2)
}

module.exports = login