const farmers = require('./secret/profile-farmers-data.json') 

const cultivation = (I,i) =>{
    if(farmers[i].Object == '雜糧'){
        I.fillField({name:'CGrain'}, farmers[i].Item)
    }else if(farmers[i].Object == '蔬菜'){
        I.fillField({name:'CVegetable'}, farmers[i].Item)
    }else if(farmers[i].Object == '花卉'){
        I.fillField({name:'CFlower'}, farmers[i].Item)
    }else if(farmers[i].Object == '果樹'){
        I.fillField({name:'CFruitTree'}, farmers[i].Item)
    }else if(farmers[i].Object == '畜牧'){
        I.fillField({name:'CLivestock'}, farmers[i].Item)
    }else if(farmers[i].Object == '其他'){
        I.fillField({name:'COther'}, farmers[i].Item)
    }
}

module.exports = cultivation