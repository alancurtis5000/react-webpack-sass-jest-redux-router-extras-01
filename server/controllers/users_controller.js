const users = require( '../dummyData/users.json')

module.exports={
    get:(req, res, next)=>{
        setTimeout(()=>{ res.status(200).send(users) }, 1500)
    }
}