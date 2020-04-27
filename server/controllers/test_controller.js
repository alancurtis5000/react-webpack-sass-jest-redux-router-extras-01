const dummyData = require( '../dummyData/dummyData.json')

module.exports={
    get:(req, res, next)=>{
        setTimeout(()=>{ res.status(200).send(dummyData) }, 1500)
    }
}