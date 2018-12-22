const farmers = require('./secret/profile-farmers-data.json') 

const landInf = (I,i) => {
    I.click('土地資料')
    I.wait(3)
    I.click('新增土地資料')
    I.wait(3)
    I.selectOption({name:'DDL_LandClass'},farmers[i].DDL_LandClass)

    //蜂農
    if(farmers[i].QualificationID == '蜂農'){
        I.fillField({name:'Boxes'},farmers[i].Boxes)
        I.fillField({name:'ROC_StartDate'},farmers[i].ROC_StartDate)
        I.fillField({name:'ROC_EndDate'},farmers[i].ROC_EndDate)
    }
    else{
    //自耕農
        if(farmers[i].QualificationID == '自耕農' || farmers[i].QualificationID == '配偶' || farmers[i].QualificationID == '農業推廣工作者' || farmers[i].QualificationID == '農林牧場員工從事農作者'){
            I.selectOption({name:'IsSelf'},farmers[i].IsSelf)
            I.selectOption({name:'DDL_Relation'},farmers[i].DDL_Relation)
            if(farmers[i].IsSelf == '是' && farmers[i].DDL_Relation != '本人'){
                if(farmers[i].DDL_Relation == '直系血親'){
                    I.fillField({name:'Relation'},farmers[i].Relation)
                }
                I.fillField({name:'LandName'},farmers[i].LandName)
                I.fillField({name:'LandIDCard'},farmers[i].LandIDCard)
            }
            I.fillField({name:'HodNum'},farmers[i].HoldNum)
            I.fillField({name:'HoldDen'},farmers[i].HoldDen)
            I.fillField({name:'AreaM2'},farmers[i].AreaM2)
        }//佃農
        else if(farmers[i].QualificationID == '佃農'){
            I.selectOption({name:'IsSelf'},farmers[i].IsSelf)
            I.selectOption({name:'DDL_Relation'},farmers[i].DDL_Relation)
            I.selectOption({name:'IsNational'},farmers[i].IsNational)
            if(farmers[i].IsSelf == '是' && farmers[i].DDL_Relation != '本人'){
                if(farmers[i].DDL_Relation == '直系血親'){
                    I.fillField({name:'Relation'},farmers[i].Relation)
                }
                I.fillField({name:'LandName'},farmers[i].LandName)
                I.fillField({name:'LandIDCard'},farmers[i].LandIDCard)
            }
            if(farmers[i].IsNational != '是'){
                I.fillField({name:'HodNum'},farmers[i].HoldNum)
                I.fillField({name:'HoldDen'},farmers[i].HoldDen)
                I.fillField({name:'AreaM2'},farmers[i].AreaM2)
                I.fillField({name:'LandIDCard'},farmers[i].LandIDCard)
            }
            I.fillField({name:'RenterName'},farmers[i].RenterName)
            I.fillField({name:'RenterIDCard'},farmers[i].RenterIDCard)
            I.fillField({name:'RentNO'},farmers[i].RentNO)
            I.fillField({name:'ROC_RentBeginDate'},farmers[i].ROC_RentBeginDate)
            I.fillField({name:'ROC_RentDueDate'},farmers[i].ROC_RentDueDate)
            I.fillField({name:'RentArea'},farmers[i].RentArea)
        }//雇農
        else if(farmers[i].QualificationID == '雇農'){
            I.fillField({name:'HirerName'},farmers[i].HirerName)
            I.fillField({name:'HirerIDCard'},farmers[i].HirerIDCard)
            I.fillField({name:'ROC_HireDueDate'},farmers[i].ROC_HireDueDate)
        }
        I.fillField({name:'ROC_RegisterDate'},farmers[i].ROC_RegisterDate)
        I.fillField({name:'RegisterReason'},farmers[i].RegisterReason)
        
        I.click({name:'IsInsurance'})
    }
    I.selectOption({name:'County'},farmers[i].County)
    I.selectOption({name:'Area'},farmers[i].Area)
    I.selectOption({name:'PartI'},farmers[i].PartI)
    if(farmers[i].PartII != ''){
        I.selectOption({name:'PartII'},farmers[i].PartII)
    }
    I.fillField({name:'NumI'},farmers[i].NumI)
    I.fillField({name:'NumII'},farmers[i].NumII)
}

module.exports = landInf