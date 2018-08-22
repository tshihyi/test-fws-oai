const safeRequire = require('./saferequired.js')

const login = (I, role = 'supervisor') => {
    const {username, password} = safeRequire('./secret/profile0.json')[role]
    I.amOnPage('/')
    I.fillField('Account', username)
    I.fillField('Password', password)
    I.click({css:'.btn-login.btn'})
    I.wait(2)
}

module.exports = login